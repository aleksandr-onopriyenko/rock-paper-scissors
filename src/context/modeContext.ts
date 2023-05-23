import { createContext } from "react";

import { GameState } from "@/types/game";
import { initialValues } from "@/constants/initialGameState";

export const ModeContext = createContext<GameState>(initialValues);
