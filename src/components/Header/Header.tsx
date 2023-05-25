import { ComponentPropsWithoutRef, FC, useContext } from "react";

import { GameMode } from "@/types/mode";
import { ModeContext } from "@/context/modeContext";
import { Mode } from "@/constants/initialGameState";

import "./style.scss";
import { Logo, Score, Toggle } from "../UI";

export const Header: FC<ComponentPropsWithoutRef<"header">> = ({ onClick }) => {
  const { mode, score, computerChoice } = useContext(ModeContext);

  return (
    <>
      <header>
        <Logo mode={mode as GameMode} />
        <Score score={score} />
      </header>
      <div
        style={{
          alignSelf: "center",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          textTransform: "uppercase",
          position: "fixed",
          top: 0,
        }}
      >
        <span
          style={{
            color: mode !== Mode.Basic ? "var(--color-dark)" : "inherit",
          }}
        >
          {Mode.Basic}
        </span>
        <Toggle
          disabled={!!computerChoice}
          title={!!computerChoice ? "Try playing this mode" : "Game mode"}
          style={{ scale: "0.7" }}
          onClick={onClick}
          isOff={mode !== Mode.Basic ? true : false}
        />
        <span
          style={{
            color: mode !== Mode.Advance ? "var(--color-dark)" : "inherit",
          }}
        >
          {Mode.Advance}
        </span>
      </div>
    </>
  );
};
