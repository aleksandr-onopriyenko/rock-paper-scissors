import { FC } from "react";

import { ChoiceButton } from "../UI";
import { Choices } from "@/types/game";

const GameChoice: FC<{
  choice: Choices;
  isWinner: boolean;
  isChoiced?: boolean;
  handleChoice: (choice: Choices) => void;
}> = ({ isWinner, isChoiced, choice, handleChoice }) => {
  return (
    <>
      <div className="choiced">
        <ChoiceButton
          isPreview
          choice={choice}
          disabled={isWinner}
          onChoiceSelected={handleChoice}
        />
      </div>
      {!!isChoiced && (
        <div className="choiced second">
          <div className="sc"></div>
        </div>
      )}
    </>
  );
};

export const UserChoice = GameChoice,
  ComputerChoice = GameChoice;
