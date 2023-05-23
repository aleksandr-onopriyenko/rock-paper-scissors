import { useCallback, useEffect, useState } from "react";

import { Choices, GameState } from "@/types/game";
import { StatusResult, winningCombos } from "@/constants/initialGameState";

export const useGameResult = (initialValues: GameState) => {
  const [result, setResult] = useState<GameState>(initialValues);

  useEffect(() => {
    if (result.isChoiced) {
      determineWinner(result.yourChoice, result.computerChoice);
    }
  }, [result.isChoiced]);

  const determineWinner = useCallback(
    (userChoice?: Choices, computerChoice?: Choices) => {
      if (!userChoice || !computerChoice) {
        return;
      }

      if (userChoice === computerChoice) {
        setResult((prev) => ({
          ...prev,
          winner: "tie",
          status: StatusResult.Tie,
        }));
      }

      if (userChoice !== computerChoice) {
        if (winningCombos[userChoice].includes(computerChoice)) {
          setResult((prev) => ({
            ...prev,
            winner: "user",
            status: StatusResult.Win,
            score: prev.score + 1,
          }));
        } else {
          setResult((prev) => ({
            ...prev,
            winner: "computer",
            status: StatusResult.Lose,
            score: prev.score - 1,
          }));
        }
      }
    },
    []
  );

  const yourChoice = useCallback((choice: Choices) => {
    setResult((prev) => ({ ...prev, yourChoice: choice }));
  }, []);

  const restart = useCallback(() => {
    setResult((prev) => ({
      ...initialValues,
      score: prev.score,
      mode: prev.mode,
    }));
  }, [initialValues]);

  return {
    result,
    yourChoice,
    setResult,
    restart,
  };
};
