import { FC } from "react";

import { Mode } from "@/constants/initialGameState";
import basic from "@/assets/images/logo.svg";
import advance from "@/assets/images/logo-bonus.svg";

import "./style.scss";

interface Props {
  mode: "basic" | "advance";
}
export const Logo: FC<Props> = ({ mode }) => {
  return (
    <h1 className={`logo logo--${mode}`}>
      <img src={mode === Mode.Basic ? basic : advance} alt="logo" />
    </h1>
  );
};
