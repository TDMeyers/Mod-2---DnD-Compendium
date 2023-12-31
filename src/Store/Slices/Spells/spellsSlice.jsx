import { createSlice } from "@reduxjs/toolkit";
import { fetchSpellsData } from "../../Thunks/Spells/fetchSpellsData";
import { fetchSpellData } from "../../Thunks/Spells/fetchSpellsData";

const spellsSlice = createSlice({
    name: "spells",
    initialState: {
        data: [],
        selectedSpell: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSpellsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSpellsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSpellsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchSpellData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSpellData.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedSpell = action.payload;
            })
            .addCase(fetchSpellData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default spellsSlice.reducer;