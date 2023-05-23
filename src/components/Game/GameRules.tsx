import { FC } from "react";

import { Popup } from "@/components/UI";
import { Mode } from "@/constants/initialGameState";
import basic from "@/assets/images/image-rules.svg";
import advance from "@/assets/images/image-rules-bonus.svg";

export const GameRules: FC<{ mode: string }> = ({ mode }) => {
  return (
    <div
      className="game-rules"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "90%",
        marginInline: "auto",
      }}
    >
      <Popup trigger="Rules">
        <img src={`${mode === Mode.Basic ? basic : advance}`} />
      </Popup>
    </div>
  );
};
