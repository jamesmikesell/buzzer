import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import mqtt from "mqtt";
import { BuzzDto, ResetDto } from '../../model/dtos';
import { Encryption } from '../../service/encryption';
import { Topic } from '../../service/topic';


@Component({
  selector: 'app-buzzer',
  standalone: true,
  imports: [MatInputModule, CommonModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './buzzer.component.html',
  styleUrl: './buzzer.component.scss'
})
export class BuzzerComponent {

  private _roomName: string;
  get roomName(): string { return this._roomName }
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
  private readonly encryption = new Encryption();
  private topicReset: string;
  private topicBuzz: string;

  constructor() {
    this._roomName = localStorage.getItem(this.ROOM_NAME);
    this._playerName = localStorage.getItem(this.PLAYER_NAME);
  }

  @HostListener('window:keydown.space', [])
  async attemptBuzz(): Promise<void> {
    if (this.buzzDisabled)
      return;

    this.buzzDisabled = true;

    let buzzDto: BuzzDto = {
      playerName: this.playerName,
    }
    let encryptedDto = await this.encryption.encryptData(JSON.stringify(buzzDto), this.roomName);
    this.client.publish(this.topicBuzz, encryptedDto);
  }


  async connect(): Promise<void> {
    this.topicBuzz = await Topic.buzz(this.roomName);
    this.topicReset = await Topic.reset(this.roomName);

    this.client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");
    this.client.on("connect", async () => {
      this.client.subscribe(this.topicReset, (err: any) => { });
    });

    this.client.on("message", async (topic, message) => {
      let resetDto: ResetDto = JSON.parse(await this.encryption.decryptData(message.toString(), this.roomName));
      if (resetDto)
        this.buzzDisabled = !resetDto.enableBuzzers;
    });
  }


  cleanRoomName(): void {
    this.roomName = Topic.trimAndRemoveDoubleSpaces(this.roomName)
  }

}
