import { Routes } from '@angular/router';
import { BuzzerComponent } from './component/buzzer/buzzer.component';
import { HostComponent } from './component/host/host.component';
import { ScoreboardComponent } from './component/scoreboard/scoreboard.component';

export const routes: Routes = [
  { path: 'host', component: HostComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: '**', component: BuzzerComponent },
];
