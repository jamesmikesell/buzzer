import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppVersion } from './app-version';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'buzzer';
  AppVersion = AppVersion;
}
