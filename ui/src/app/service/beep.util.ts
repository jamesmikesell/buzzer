
export class BeepUtil {

  static playChirp(startFrequency = 3000): void {
    const audioContext = new window.AudioContext;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.type = 'sine';

    let playTime = 0.1;
    oscillator.frequency.setValueAtTime(startFrequency, audioContext.currentTime);

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + playTime);
  }

}
