import {
  GameWrapper,
  GameChoices,
  GameProcess,
  GameRules,
} from "@/components/Game";
import { Header } from "@/components/Header";
import { ModeContext } from "@/context/modeContext";
import { useGameProcess } from "@/hooks/useGameProcess";

export const App = () => {
  const { result, restart, handleMode, choices, activeClass, handleChoice } =
    useGameProcess();

  return (
    <ModeContext.Provider value={result}>
      <Header onClick={handleMode} />
      <GameWrapper>
        <GameProcess
          result={result}
          restart={restart}
          handleChoice={handleChoice}
        />
        <GameChoices
          choices={choices}
          mode={result.mode}
          onChoice={handleChoice}
          classActive={activeClass}
          isChoices={!!result.yourChoice}
        />
      </GameWrapper>
      <GameRules mode={result.mode} />
    </ModeContext.Provider>
  );
};
