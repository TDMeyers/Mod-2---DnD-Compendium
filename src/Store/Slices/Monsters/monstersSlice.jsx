import { createSlice } from "@reduxjs/toolkit";
import { fetchMonstersData } from "../../Thunks/Monsters/fetchMonstersData";
import { fetchMonsterData } from "../../Thunks/Monsters/fetchMonstersData";

const monstersSlice = createSlice({
    name: "monsters",
    initialState: {
        data: [],
        selectedMonster: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMonstersData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMonstersData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMonstersData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchMonsterData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMonsterData.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedMonster = action.payload;
            })
            .addCase(fetchMonsterData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default monstersSlice.reducer;