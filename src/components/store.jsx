import { configureStore } from "@reduxjs/toolkit"
import gameSliceReducer from './GameDataSlice'

export const store = configureStore({
    reducer: {
        gameSlice: gameSliceReducer
    }
})