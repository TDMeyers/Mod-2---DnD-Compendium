import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import alignmentsReducer from "./Slices/Character Data/alignmentsSlice";
import gameMechanicsReducer from "./Slices/Game Mechanics/gameMechanicsSlice";

const store = configureStore({
  reducer: {
    alignments: alignmentsReducer,
    gameData: gameMechanicsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
