import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'host', loadComponent: () => import('./component/host/host.component').then(m => m.HostComponent), },
  { path: 'scoreboard', loadComponent: () => import('./component/scoreboard/scoreboard.component').then(m => m.ScoreboardComponent), },
  { path: '**', loadComponent: () => import('./component/buzzer/buzzer.component').then(m => m.BuzzerComponent), },
];
