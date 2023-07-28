import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import alignmentsReducer from "./Slices/alignmentsSlice";
import gameMechanicsReducer from "./Slices/gameMechanicsSlice";

const store = configureStore({
  reducer: {
    alignments: alignmentsReducer,
    gameData: gameMechanicsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
