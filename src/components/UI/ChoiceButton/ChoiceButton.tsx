import { FC } from "react";

import "./style.scss";

interface Props {
  choice: "rock" | "paper" | "scissors" | "lizard" | "spock";
  onChoiceSelected: (choice: string) => void;
}

export const ChoiceButton: FC<Props> = ({
  choice,
  onChoiceSelected,
  ...props
}) => {
  const handleClick = () => {
    onChoiceSelected(choice);
  };
  return (
    <button
      className={`btn btn--${choice}`}
      onClick={handleClick}
      {...props}
      type="button"
    />
  );
};
