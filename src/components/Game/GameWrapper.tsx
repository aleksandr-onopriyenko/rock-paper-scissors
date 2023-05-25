import { FC, ReactElement } from "react";
import "./style.scss";

export const GameWrapper: FC<{ children: ReactElement[] }> = ({ children }) => {
  return <main className="game-wrapper">{children}</main>;
};
