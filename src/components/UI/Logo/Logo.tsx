import { FC } from "react";

import "./style.scss";

interface Props {
  mode: "basic" | "advance";
}
export const Logo: FC<Props> = ({ mode }) => {
  return <div className={`logo logo--${mode}`}></div>;
};
