export type Choices = "rock" | "paper" | "scissors" | "lizard" | "spock";

export interface GameResult {
  winner: "user" | "computer" | "tie";
  status: string;
}

export interface GameProcess {
  result: GameState;
  choices: Choices[];
  activeClass: string;
  restart: () => void;
  handleMode: () => void;
  handleChoice: (choice: Choices) => void;
}

export interface GameState {
  mode: string;
  score: number;
  yourChoice: Choices | undefined;
  computerChoice: Choices | undefined;
  status: string;
  isChoiced: boolean;
  winner: "user" | "computer" | "tie";
}
