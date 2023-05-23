import { FC } from "react";

import { Choices, GameState } from "@/types/game";

import { GameResult } from "./GameResult";
import { ComputerChoice, UserChoice } from "./GameChoice";

export const GameProcess: FC<{
  result: GameState;
  restart: () => void;
  handleChoice: (choice: Choices) => void;
}> = ({ result, restart, handleChoice }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      {result.yourChoice && (
        <UserChoice
          handleChoice={handleChoice}
          isWinner={result.winner === "user"}
          choice={result.yourChoice}
          isChoiced={!result.computerChoice}
        />
      )}
      {result.isChoiced && (
        <GameResult onRestart={restart} status={result.status} />
      )}
      {result.computerChoice && (
        <ComputerChoice
          handleChoice={handleChoice}
          isWinner={result.winner === "computer"}
          choice={result.computerChoice}
        />
      )}
    </div>
  );
};
