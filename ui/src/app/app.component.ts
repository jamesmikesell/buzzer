import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppVersion } from './app-version';
import { BuzzerComponent } from "./component/buzzer/buzzer.component";
import { HostComponent } from "./component/host/host.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, BuzzerComponent, HostComponent]
})
export class AppComponent {
  title = 'buzzer';
  AppVersion = AppVersion;
}
