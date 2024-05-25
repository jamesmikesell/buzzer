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
  // responses: string[] = ["Jim", "Jordan", "Long name that is really long"];
  responses: string[] = [];
  sortedScores: [string, number][] = []
  scores = new Map<string, number>();


  private readonly ROOM_NAME = "roomName";
  private readonly encryption = new Encryption();
  private topicReset: string;
  private topicBuzz: string;

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
      this.responses.push(dto.playerName)
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

    let dto: ResetDto = {
      enableBuzzers: enabled,
    }

    let encryptedPayload = await this.encryption.encryptData(JSON.stringify(dto), this.roomName);
    this.client.publish(this.topicReset, encryptedPayload);
  }

  adjustPoints(playerName: string, scoreAdjustment: number): void {
    let existingScore = this.scores.get(playerName) | 0;
    existingScore += scoreAdjustment;
    this.scores.set(playerName, existingScore);

    this.sortedScores.length = 0
    this.scores.forEach((score, player) => {
      this.sortedScores.push([player, score])
    })

    this.sortedScores.sort((a, b) => b[1] - a[1])
  }



}
