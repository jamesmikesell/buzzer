import { CommonModule } from '@angular/common';
import { Component, HostListener, NgZone, OnDestroy } from '@angular/core';
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
  players: ScoreboardPlayerView[] = [];
  connected = false;
  connecting = false;
  connectionError = "";
  fullscreenButtonVisible = false;
  cursorHidden = false;
  isFullscreen = false;

  private readonly encryption = new Encryption();
  private topicScoreboard: string;
  private fullscreenButtonTimeout: ReturnType<typeof setTimeout>;

  constructor(private readonly zone: NgZone) { }


  ngOnDestroy(): void {
    if (this.client)
      this.client.end();

    clearTimeout(this.fullscreenButtonTimeout);
  }


  async connect(): Promise<void> {
    if (this.connecting)
      return;

    try {
      this.connecting = true;
      this.cleanRoomName();
      this.topicScoreboard = await Topic.scoreboard(this.roomName);
      this.connectionError = "";

      this.client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");
      this.client.on("connect", () => {
        this.client.subscribe(this.topicScoreboard, (err: any) => {
          this.zone.run(() => {
            if (err) {
              this.connectionFailed();
              return;
            }

            this.connected = true;
            this.connecting = false;
            this.connectionError = "";
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
          this.players = this.withTieMarkers(dto.players || []);
        });
      });

      this.client.on("error", () => {
        this.zone.run(() => this.connectionFailed());
      });
    } catch {
      this.connectionFailed();
    }
  }


  cleanRoomName(): void {
    this.roomName = Topic.trimAndRemoveDoubleSpaces(this.roomName)
  }


  private connectionFailed(): void {
    this.client?.end();
    this.connected = false;
    this.connecting = false;
    this.connectionError = "Unable to connect";
  }


  private withTieMarkers(players: ScoreboardPlayerDto[]): ScoreboardPlayerView[] {
    return players.map((player, index) => {
      let previous = players[index - 1];
      let next = players[index + 1];
      let tiedWithPrevious = previous?.score === player.score;
      let tiedWithNext = next?.score === player.score;

      return {
        ...player,
        tie: tiedWithPrevious || tiedWithNext,
        tieStart: tiedWithNext && !tiedWithPrevious,
        tieEnd: tiedWithPrevious && !tiedWithNext,
      };
    });
  }


  showFullscreenButton(): void {
    this.isFullscreen = !!document.fullscreenElement;
    this.cursorHidden = false;
    this.fullscreenButtonVisible = true;
    clearTimeout(this.fullscreenButtonTimeout);
    this.fullscreenButtonTimeout = setTimeout(() => {
      this.zone.run(() => {
        this.fullscreenButtonVisible = false;
        this.cursorHidden = true;
      });
    }, 2500);
  }


  async toggleFullscreen(event: Event): Promise<void> {
    event.stopPropagation();

    if (document.fullscreenElement)
      await document.exitFullscreen();
    else
      await document.documentElement.requestFullscreen();

    this.isFullscreen = !!document.fullscreenElement;
    this.showFullscreenButton();
  }


  @HostListener('document:fullscreenchange')
  handleFullscreenChange(): void {
    this.isFullscreen = !!document.fullscreenElement;
  }
}


interface ScoreboardPlayerView extends ScoreboardPlayerDto {
  tie: boolean;
  tieStart: boolean;
  tieEnd: boolean;
}
