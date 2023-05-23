import { FC } from "react";

import { Choices } from "@/types/game";
import { ChoiceButton } from "@/components/UI/ChoiceButton/ChoiceButton";

export const GameChoices: FC<{
  mode: string;
  choices: string[];
  classActive: string;
  isChoices: boolean;
  onChoice: (choice: Choices) => void;
}> = ({ mode, choices, classActive, isChoices, onChoice }) => {
  if (isChoices) return <></>;

  return (
    <div className={`${mode} ${classActive}`}>
      {(choices as Choices[]).map((e) => (
        <div key={e}>
          <ChoiceButton choice={e} onChoiceSelected={onChoice} />
        </div>
      ))}
    </div>
  );
};
