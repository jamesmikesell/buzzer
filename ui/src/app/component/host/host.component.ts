import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import mqtt from "mqtt";
import { BuzzDto, ResetDto } from '../../model/dtos';
import { AudioService } from '../../service/audio-service';
import { Encryption } from '../../service/encryption';
import { Topic } from '../../service/topic';
import { TimerComponent } from "../timer/timer.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-host',
  standalone: true,
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss',
  imports: [MatInputModule, CommonModule, FormsModule, MatButtonModule, MatCheckboxModule, MatExpansionModule, TimerComponent, MatIconModule]
})
export class HostComponent {

  private _roomName: string;
  get roomName(): string { return this._roomName }
  set roomName(val: string) {
    localStorage.setItem(this.ROOM_NAME, "" + val);
    this._roomName = val;
  }
  client: mqtt.MqttClient;
  audio = true;
  responses: Response[] = [];
  sortedScores: Contestant[] = []
  contestants = new Map<string, Contestant>();
  handicapQuickPlayers = true;
  hapticFeedback = true;
  showTimer = true;
  timerSeconds = 10;
  pointsNegative = 1;
  pointsPositive = 1;
  private _enabled = false;
  get enabled(): boolean { return this._enabled }
  set enabled(val: boolean) { this._enabled = val; this.resetBuzzers() }


  private readonly ROOM_NAME = "roomName";
  private readonly encryption = new Encryption();
  private topicReset: string;
  private topicBuzz: string;
  private firstAnswerTime: number;
  private audioService = new AudioService();


  constructor() {
    this._roomName = localStorage.getItem(this.ROOM_NAME);
  }


  async connect(): Promise<void> {
    this.topicBuzz = await Topic.buzz(this.roomName);
    this.topicReset = await Topic.reset(this.roomName);

    this.client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");
    this.client.on("connect", async () => {
      this.client.subscribe(this.topicBuzz, (err: any) => { });
    });

    this.client.on("message", (topic, message) => {
      if (topic === this.topicBuzz)
        this.handleBuzzerResponse(message.toString());
    });
  }


  private async handleBuzzerResponse(message: string): Promise<void> {
    let dto: BuzzDto = JSON.parse(await this.encryption.decryptData(message, this.roomName));

    let contestant = this.contestants.get(dto.playerName);
    if (!contestant) {
      contestant = new Contestant();
      contestant.name = dto.playerName;
      this.contestants.set(dto.playerName, contestant);
    }

    const now = Date.now();
    if (!this.firstAnswerTime)
      this.firstAnswerTime = now;

    let playerAlreadyResponded = this.responses.filter(single => single.contestant === contestant);
    if (playerAlreadyResponded.length) {
      console.log("Player already responded this round")
      return;
    }

    if (this.audio)
      this.audioService.playBuzzer();

    const delta = now - this.firstAnswerTime;
    contestant.speedDelta.push(delta);

    this.responses.push(new Response(contestant, delta))
    if (this.handicapQuickPlayers)
      this.responses.sort((a, b) => a.handicapAdjustedResponseTime() - b.handicapAdjustedResponseTime())
  }


  async resetBuzzers(): Promise<void> {
    if (this.enabled)
      this.responses.length = 0;

    this.firstAnswerTime = undefined;

    let dto: ResetDto = {
      enableBuzzers: this.enabled,
    }

    let encryptedPayload = await this.encryption.encryptData(JSON.stringify(dto), this.roomName);
    this.client.publish(this.topicReset, encryptedPayload);
  }


  adjustPoints(playerName: string, scoreAdjustment: number): void {
    let contestant = this.contestants.get(playerName);
    let multiplier = scoreAdjustment > 0 ? this.pointsPositive : this.pointsNegative
    contestant.score += scoreAdjustment * multiplier;

    this.sortedScores.length = 0
    this.contestants.forEach(singlePlayer => {
      this.sortedScores.push(singlePlayer)
    })

    this.sortedScores.sort((a, b) => b.score - a.score)

    if (this.hapticFeedback)
      navigator.vibrate(150);
  }


  cleanRoomName(): void {
    this.roomName = Topic.trimAndRemoveDoubleSpaces(this.roomName)
  }

}


class Contestant {
  name: string;
  speedDelta: number[] = [];
  score = 0;

  /** the average time delay between the first person responding and this contestant */
  averageResponseTimeDelta(): number {
    if (this.speedDelta.length < 3)
      return 0;

    return this.speedDelta.reduce((a, b) => a + b) / this.speedDelta.length;
  }
}


class Response {
  constructor(
    public contestant: Contestant,
    public responseTimeDelta: number,
  ) { }


  handicapAdjustedResponseTime() {
    return this.responseTimeDelta - this.contestant.averageResponseTimeDelta();
  }
}