import { useEffect, useState } from "react";

import { useGameResult } from "./useGameResult";
import { Choices, GameProcess } from "@/types/game";
import { CHOICES, Mode, initialValues } from "@/constants/initialGameState";

export const useGameProcess = (): GameProcess => {
  const [activeClass, setActiveClass] = useState("active");
  const { result, setResult, yourChoice, restart } =
    useGameResult(initialValues);
  const [choices, setChoices] = useState(CHOICES);

  useEffect(() => {
    if (result.mode === Mode.Basic) {
      setChoices(() =>
        choices.filter((choice) => choice !== "lizard" && choice !== "spock")
      );
      return;
    } else {
      setChoices(() => CHOICES);
    }
  }, [result.mode]);

  const computerThinking = () => {
    setResult((prev) => ({
      ...prev,
      isChoiced: false,
    }));
  };

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    setTimeout(() => {
      setResult((prev) => ({
        ...prev,
        computerChoice: choices[randomIndex] as Choices,
      }));
    }, 1500);
    setTimeout(() => {
      setResult((prev) => ({
        ...prev,
        isChoiced: true,
      }));
    }, 1800);
  };

  const handleChoice = (choice: Choices) => {
    yourChoice(choice);
    computerThinking();
    generateComputerChoice();
  };

  const handleMode = () => {
    restart();
    setActiveClass("");
    setTimeout(() => setActiveClass("active"), 300);
    setResult((prev) => ({
      ...prev,
      mode: prev.mode === Mode.Basic ? Mode.Advance : Mode.Basic,
    }));
  };

  return {
    result,
    choices,
    activeClass,
    restart,
    handleMode,
    handleChoice,
  };
};
