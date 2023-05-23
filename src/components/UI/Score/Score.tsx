import { FC } from "react";

import "./style.scss";

interface Props {
  score: number;
}

export const Score: FC<Props> = ({ score }) => {
  return (
    <div className="score">
      <div className="score__title">Score</div>
      <span>{score}</span>
    </div>
  );
};
