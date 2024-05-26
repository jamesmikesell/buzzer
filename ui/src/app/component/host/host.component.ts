import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import mqtt from "mqtt";
import { BuzzDto, ResetDto } from '../../model/dtos';
import { Encryption } from '../../service/encryption';
import { Topic } from '../../service/topic';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [MatInputModule, CommonModule, FormsModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss'
})
export class HostComponent {

  private _roomName: string;
  get roomName(): string { return this._roomName?.toLocaleLowerCase(); }
  set roomName(val: string) {
    localStorage.setItem(this.ROOM_NAME, "" + val);
    this._roomName = val;
  }
  client: mqtt.MqttClient;
  audio = false;
  responses: Response[] = [];
  sortedScores: Contestant[] = []
  contestants = new Map<string, Contestant>();
  handicapQuickPlayers = false;
  hapticFeedback = false;

  private readonly ROOM_NAME = "roomName";
  private readonly encryption = new Encryption();
  private topicReset: string;
  private topicBuzz: string;
  private firstAnswerTime: number;

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

    this.client.on("message", async (topic, message) => {
      let dto: BuzzDto = JSON.parse(await this.encryption.decryptData(message.toString(), this.roomName));
      if (this.audio)
        this.playChirp();

      let contestant = this.contestants.get(dto.playerName);
      if (!contestant) {
        contestant = new Contestant();
        contestant.name = dto.playerName;
        this.contestants.set(dto.playerName, contestant);
      }

      const now = Date.now();
      if (!this.firstAnswerTime)
        this.firstAnswerTime = now;

      const delta = now - this.firstAnswerTime;
      contestant.speedDelta.push(delta);

      this.responses.push(new Response(contestant, delta))
      if (this.handicapQuickPlayers)
        this.responses.sort((a, b) => a.handicapAdjustedResponseTime() - b.handicapAdjustedResponseTime())
    });
  }

  private playChirp(): void {
    const audioContext = new window.AudioContext;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';

    let startFrequency = 3000;
    let playTime = 0.1;
    oscillator.frequency.setValueAtTime(startFrequency, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + playTime);
  }


  async resetBuzzers(enabled: boolean): Promise<void> {
    if (enabled)
      this.responses.length = 0;

    this.firstAnswerTime = undefined;

    let dto: ResetDto = {
      enableBuzzers: enabled,
    }

    let encryptedPayload = await this.encryption.encryptData(JSON.stringify(dto), this.roomName);
    this.client.publish(this.topicReset, encryptedPayload);
  }


  adjustPoints(playerName: string, scoreAdjustment: number): void {
    let contestant = this.contestants.get(playerName);
    contestant.score += scoreAdjustment;

    this.sortedScores.length = 0
    this.contestants.forEach(singlePlayer => {
      this.sortedScores.push(singlePlayer)
    })

    this.sortedScores.sort((a, b) => b.score - a.score)

    if (this.hapticFeedback)
      navigator.vibrate(150);
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