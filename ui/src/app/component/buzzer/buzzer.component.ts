import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import mqtt from "mqtt";
import { BuzzDto } from '../../model/dtos';


@Component({
  selector: 'app-buzzer',
  standalone: true,
  imports: [MatInputModule, CommonModule, FormsModule, MatButtonModule],
  templateUrl: './buzzer.component.html',
  styleUrl: './buzzer.component.scss'
})
export class BuzzerComponent {

  private _roomName: string;
  get roomName(): string { return this._roomName; }
  set roomName(val: string) {
    localStorage.setItem(this.ROOM_NAME, "" + val);
    this._roomName = val;
  }
  private _playerName: string;
  get playerName(): string { return this._playerName; }
  set playerName(val: string) {
    localStorage.setItem(this.PLAYER_NAME, "" + val);
    this._playerName = val;
  }
  client: mqtt.MqttClient;
  buzzDisabled = true;


  private readonly ROOM_NAME = "roomName";
  private readonly PLAYER_NAME = "playerName";

  constructor() {
    this._roomName = localStorage.getItem(this.ROOM_NAME);
    this._playerName = localStorage.getItem(this.PLAYER_NAME);
  }

  @HostListener('window:keydown.space', [])
  attemptBuzz(): void {
    if (this.buzzDisabled)
      return;

    this.buzzDisabled = true;
    this.client.publish(`buzzer-app/${this.roomName}/buzz`, JSON.stringify(new BuzzDto(this.playerName)));
  }


  connect(): void {
    this.client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");
    this.client.on("connect", () => {
      this.client.subscribe(`buzzer-app/${this.roomName}/reset`, (err: any) => {
      });
    });

    this.client.on("message", (topic, message) => {
      this.buzzDisabled = false;
    });
  }


}
