import { ComponentPropsWithoutRef, FC } from "react";

import "./style.scss";

export const Toggle: FC<
  { isOff: boolean } & ComponentPropsWithoutRef<"button">
> = ({ isOff, ...props }) => (
  <button
    {...props}
    className={`toggle toggle--${isOff ? "off" : "on"}`}
    type="button"
  >
    <span hidden>button</span>
  </button>
);
