import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import alignmentsReducer from "./Slices/Character Data/alignmentsSlice";
import abilityScoresReducer from "./Slices/Character Data/abilityScoresSlice"
import gameMechanicsReducer from "./Slices/Game Mechanics/gameMechanicsSlice";
import popupReducer from "./Slices/Site Functions/popupSlice";

const store = configureStore({
  reducer: {
    popup: popupReducer,
    alignments: alignmentsReducer,
    abilityScores: abilityScoresReducer,
    gameData: gameMechanicsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
