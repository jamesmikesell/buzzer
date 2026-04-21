import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import mqtt from "mqtt";
import { ScoreboardDto, ScoreboardPlayerDto } from '../../model/dtos';
import { Encryption } from '../../service/encryption';
import { Topic } from '../../service/topic';

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatInputModule],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.scss'
})
export class ScoreboardComponent implements OnDestroy {
  roomName = "";
  client: mqtt.MqttClient;
  players: ScoreboardPlayerDto[] = [];
  connected = false;
  connectionError = "";

  private readonly encryption = new Encryption();
  private topicScoreboard: string;

  constructor(private readonly zone: NgZone) { }


  ngOnDestroy(): void {
    if (this.client)
      this.client.end();
  }


  async connect(): Promise<void> {
    this.cleanRoomName();
    this.topicScoreboard = await Topic.scoreboard(this.roomName);
    this.connectionError = "";

    this.client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");
    this.client.on("connect", () => {
      this.client.subscribe(this.topicScoreboard, (err: any) => {
        this.zone.run(() => {
          this.connected = !err;
          this.connectionError = err ? "Unable to connect" : "";
        });
      });
    });

    this.client.on("message", async (topic, message) => {
      if (topic !== this.topicScoreboard)
        return;

      let decryptedMessage = await this.encryption.decryptData(message.toString(), this.roomName);
      if (!decryptedMessage)
        return;

      let dto: ScoreboardDto = JSON.parse(decryptedMessage);
      this.zone.run(() => {
        this.players = dto.players || [];
      });
    });

    this.client.on("error", () => {
      this.zone.run(() => {
        this.connectionError = "Unable to connect";
      });
    });
  }


  cleanRoomName(): void {
    this.roomName = Topic.trimAndRemoveDoubleSpaces(this.roomName)
  }
}
