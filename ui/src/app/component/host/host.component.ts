import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import mqtt from "mqtt";
import { BuzzDto } from '../../model/dtos';
import { Encryption } from '../../service/encryption';
import { Topic } from '../../service/topic';

@Component({
  selector: 'app-host',
  standalone: true,
  imports: [MatInputModule, CommonModule, FormsModule, MatButtonModule],
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

  responses: string[] = [];

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
      this.responses.push(dto.playerName)
    });
  }


  async resetBuzzers(): Promise<void> {
    this.responses.length = 0;
    let encryptedDto = await this.encryption.encryptData("{}", this.roomName);
    this.client.publish(this.topicReset, encryptedDto);
  }


}
