import { createSlice } from "@reduxjs/toolkit";
import { fetchClassesData } from "../../Thunks/Class/fetchClassesData";
import { fetchClassSpellcasting } from "../../Thunks/Class/fetchClassesData";
import { fetchClassMultiClassing } from "../../Thunks/Class/fetchClassesData";

const classesSlice = createSlice({
    name: "classes",
    initialState: {
        data: [],
        spellcasting: null,
        multiClassing: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClassesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchClassesData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchClassesData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchClassSpellcasting.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchClassSpellcasting.fulfilled, (state, action) => {
                state.loading = false;
                state.spellcasting = action.payload;
            })
            .addCase(fetchClassSpellcasting.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchClassMultiClassing.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchClassMultiClassing.fulfilled, (state, action) => {
                state.loading = false;
                state.multiClassing = action.payload;
            })
            .addCase(fetchClassMultiClassing.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default classesSlice.reducer;