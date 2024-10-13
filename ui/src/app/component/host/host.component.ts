import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { instanceToPlain, plainToInstance, Type } from 'class-transformer';
import mqtt from "mqtt";
import { interval, Subject, takeUntil } from 'rxjs';
import { BuzzDto, ResetDto } from '../../model/dtos';
import { AudioService } from '../../service/audio-service';
import { Encryption } from '../../service/encryption';
import { Topic } from '../../service/topic';
import { TimerComponent } from "../timer/timer.component";

@Component({
  selector: 'app-host',
  standalone: true,
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss',
  imports: [MatInputModule, CommonModule, FormsModule, MatButtonModule, MatCheckboxModule, MatExpansionModule, TimerComponent, MatIconModule]
})
export class HostComponent implements OnDestroy {

  private _roomName: string;
  get roomName(): string { return this._roomName }
  set roomName(val: string) {
    localStorage.setItem(this.ROOM_NAME, "" + val);
    this._roomName = val;
  }
  client: mqtt.MqttClient;
  responses: Response[] = [];
  sortedScores: Contestant[] = []
  contestants = new Map<string, Contestant>();
  gameConfig: GameConfig;
  private _enabled = false;
  private KEY_PERSISTED_SCORES = "persisted_scores";
  private KEY_PERSISTED_CONFIG = "persisted_config";
  get enabled(): boolean { return this._enabled }
  set enabled(val: boolean) { this._enabled = val; this.resetBuzzers() }


  private readonly ROOM_NAME = "roomName";
  private readonly encryption = new Encryption();
  private topicReset: string;
  private topicBuzz: string;
  private firstAnswerTime: number;
  private audioService = new AudioService();
  private destroy = new Subject<void>();


  constructor() {
    this._roomName = localStorage.getItem(this.ROOM_NAME);

    this.loadPersistedScores();
    this.loadPersistedConfig();

    interval(5000)
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        this.persistConfig()
      });
  }


  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
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


  private loadPersistedScores(): void {
    let scoresJson = localStorage.getItem(this.KEY_PERSISTED_SCORES) || "{}"
    let scoresWrapper = plainToInstance(ScoresWrapper, JSON.parse(scoresJson))
    this.sortedScores = scoresWrapper.sortedScores;

    this.sortedScores.forEach(singleContestant => this.contestants.set(singleContestant.name, singleContestant))
  }


  private loadPersistedConfig(): void {
    let scoresJson = localStorage.getItem(this.KEY_PERSISTED_CONFIG) || "{}"
    this.gameConfig = plainToInstance(GameConfig, JSON.parse(scoresJson))
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

    if (this.gameConfig.audio)
      this.audioService.playBuzzer();

    const delta = now - this.firstAnswerTime;
    contestant.speedDelta.push(delta);

    this.responses.push(new Response(contestant, delta))
    if (this.gameConfig.handicapQuickPlayers)
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
    let multiplier = scoreAdjustment > 0 ? this.gameConfig.pointsPositive : this.gameConfig.pointsNegative
    contestant.score += scoreAdjustment * multiplier;

    this.sortedScores.length = 0
    this.contestants.forEach(singlePlayer => {
      this.sortedScores.push(singlePlayer)
    })

    this.sortedScores.sort((a, b) => b.score - a.score)

    this.persistScores(this.sortedScores);

    if (this.gameConfig.hapticFeedback)
      navigator.vibrate(150);
  }


  private persistScores(sortedScores: Contestant[]) {
    let scoreWrapper = new ScoresWrapper();
    scoreWrapper.sortedScores = sortedScores;

    let plain = instanceToPlain(scoreWrapper);
    let json = JSON.stringify(plain)

    localStorage.setItem(this.KEY_PERSISTED_SCORES, json);
  }


  private persistConfig() {
    let plain = instanceToPlain(this.gameConfig);
    let json = JSON.stringify(plain)

    localStorage.setItem(this.KEY_PERSISTED_CONFIG, json);
  }


  cleanRoomName(): void {
    this.roomName = Topic.trimAndRemoveDoubleSpaces(this.roomName)
  }


  clearScores(): void {
    localStorage.setItem(this.KEY_PERSISTED_SCORES, "{}");
    this.contestants.clear();
    this.sortedScores.length = 0;
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


class GameConfig {
  audio = true;
  handicapQuickPlayers = true;
  hapticFeedback = true;
  showTimer = true;
  timerSeconds = 10;
  pointsNegative = 1;
  pointsPositive = 1;
}


class ScoresWrapper {
  @Type(() => Contestant)
  sortedScores: Contestant[] = []
}
