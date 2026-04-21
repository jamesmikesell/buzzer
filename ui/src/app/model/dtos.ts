
export interface BuzzDto {
  playerName: string,
}

export interface ResetDto {
  enableBuzzers: boolean;
}

export interface ScoreboardPlayerDto {
  rank: number;
  name: string;
  score: number;
}

export interface ScoreboardDto {
  players: ScoreboardPlayerDto[];
}
