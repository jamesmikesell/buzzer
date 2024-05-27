
export class AudioService {

  private alarm: HTMLAudioElement;
  private buzzer: HTMLAudioElement;


  constructor() {
    this.initAlarm()
    this.initBuzzer()
  }


  private initAlarm(): void {
    this.alarm = new Audio();
    this.alarm.src = 'assets/alarm.mp3';
    this.alarm.load();
  }


  private initBuzzer(): void {
    this.buzzer = new Audio();
    this.buzzer.src = 'assets/buzzer.mp3';
    this.buzzer.load();
  }


  playAlarm(): void {
    this.alarm.play();
  }


  playBuzzer(): void {
    this.buzzer.play()
  }

}
