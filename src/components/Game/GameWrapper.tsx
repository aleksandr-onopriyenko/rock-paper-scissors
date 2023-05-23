import { FC, ReactElement } from "react";
import "./style.scss";

export const GameWrapper: FC<{ children: ReactElement[] }> = ({ children }) => {
  return <div className="game-wrapper">{children}</div>;
};
