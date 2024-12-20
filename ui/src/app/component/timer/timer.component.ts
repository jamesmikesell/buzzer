import { AsyncPipe, DecimalPipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Subject, Subscription, interval, map, takeUntil, takeWhile, tap } from 'rxjs';
import { AudioService } from '../../service/audio-service';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [MatButtonModule, AsyncPipe, DecimalPipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnDestroy {

  @Input() timerSeconds = 10;
  secondLeft: Subject<number>;

  private destroy = new Subject<void>();
  private timerSubscription: Subscription;
  private audioService = new AudioService();


  timerButtonClick(): void {
    if (!this.secondLeft) {
      this.startTimer();
    } else {
      this.cancelTimer()
    }
  }


  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }


  private startTimer(): void {
    let endTime = Date.now() + this.timerSeconds * 1000;

    this.timerSubscription = interval(50).pipe(
      map(() => endTime - Date.now()),
      takeWhile(msRemaining => msRemaining >= 0),
      takeUntil(this.destroy),
      tap({
        complete: () => {
          this.alarm();
          this.cancelTimer();
        }
      })
    ).subscribe(
      msRemaining => {
        if (!this.secondLeft)
          this.secondLeft = new Subject()

        this.secondLeft.next(msRemaining / 1000);
      }
    );
  }


  private cancelTimer(): void {
    if (this.timerSubscription)
      this.timerSubscription.unsubscribe();

    if (this.secondLeft)
      this.secondLeft.complete();
    this.secondLeft = undefined;
  }


  private async alarm(): Promise<void> {
    this.audioService.playAlarm();
  }

}
