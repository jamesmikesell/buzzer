import { Encryption } from "./encryption";

export class Topic {

  static buzz(roomName: string): Promise<string> {
    let topic = `buzzer-app/${roomName}/buzz`;
    return Encryption.hashString(topic);
  }


  static reset(roomName: string): Promise<string> {
    let topic = `buzzer-app/${roomName}/reset`;
    return Encryption.hashString(topic);
  }


  static trimAndRemoveDoubleSpaces(input: string): string {
    if (input)
      return input.toLocaleLowerCase().replace(/\s{2,}/g, ' ').trim();

    return input;
  }

}