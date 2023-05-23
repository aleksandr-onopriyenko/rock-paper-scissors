import { Choices, GameState } from "@/types/game";

export const initialValues: GameState = {
  score: 1,
  status: "",
  mode: "basic",
  yourChoice: undefined,
  computerChoice: undefined,
  isChoiced: false,
  winner: "tie",
};

export const CHOICES: Choices[] = [
  "paper",
  "scissors",
  "rock",
  "lizard",
  "spock",
];

export const enum Mode {
  Basic = "basic",
  Advance = "advance",
}

export const enum StatusResult {
  Win = "you win",
  Lose = "you lose",
  Tie = "It's tie!",
}

export const winningCombos: Record<string, string[]> = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["paper", "spock"],
  spock: ["rock", "scissors"],
};
