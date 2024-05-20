import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import mqtt from "mqtt";
import { BuzzDto } from '../../model/dtos';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [MatInputModule, CommonModule, FormsModule, MatButtonModule],
  templateUrl: './host.component.html',
  styleUrl: './host.component.scss'
})
export class HostComponent {

  private _roomName: string;
  get roomName(): string { return this._roomName; }
  set roomName(val: string) {
    localStorage.setItem(this.ROOM_NAME, "" + val);
    this._roomName = val;
  }
  client: mqtt.MqttClient;

  responses: string[] = [];

  private readonly ROOM_NAME = "roomName";


  constructor() {
    this._roomName = localStorage.getItem(this.ROOM_NAME);
  }


  connect(): void {
    this.client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");
    this.client.on("connect", () => {
      this.client.subscribe(`buzzer-app/${this.roomName}/buzz`, (err: any) => { });
    });

    this.client.on("message", (topic, message) => {
      let dto: BuzzDto = JSON.parse(message.toString());
      this.responses.push(dto.playerName)
    });
  }


  resetBuzzers(): void {
    this.responses.length = 0;
    this.client.publish(`buzzer-app/${this.roomName}/reset`, "{}");
  }


}
