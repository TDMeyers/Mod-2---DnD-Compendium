import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    listType: 'all'
}

const gameSlice = createSlice({
    name: 'gamedata',
    initialState,
    reducers: {

    }
})

export default gameSlice.reducer;

export const {} = gameSlice.actions