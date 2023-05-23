import { FC } from "react";

import { Choices } from "@/types/game";
import "./style.scss";

interface Props {
  disabled?: boolean;
  isPreview?: boolean;
  choice: Choices;
  onChoiceSelected: (choice: Choices) => void;
}

export const ChoiceButton: FC<Props> = ({
  choice,
  disabled,
  isPreview = false,
  onChoiceSelected,
  ...props
}) => {
  const handleClick = () => {
    onChoiceSelected(choice);
  };
  return (
    <button
      disabled={isPreview}
      className={`btn btn--${choice} ${disabled ? "disabled" : ""}`}
      onClick={handleClick}
      {...props}
      type="button"
    />
  );
};
