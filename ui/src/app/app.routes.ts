import { Routes } from '@angular/router';
import { BuzzerComponent } from './component/buzzer/buzzer.component';
import { HostComponent } from './component/host/host.component';

export const routes: Routes = [
  { path: 'host', component: HostComponent },
  { path: '**', component: BuzzerComponent },
];
