import { FC } from "react";

export const GameResult: FC<{ status: string; onRestart: () => void }> = ({
  status,
  onRestart,
}) => {
  return (
    <div className="game-result">
      <h2
        style={{
          color: "#fff",
          textTransform: "uppercase",
          fontSize: "3rem",
        }}
      >
        {status}
      </h2>
      <button className="buton" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
};
