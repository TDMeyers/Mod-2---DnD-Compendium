import { createSlice } from "@reduxjs/toolkit";
import { fetchAbilityScoresData, fetchAbilityScoresDetails } from "../../Thunks/Character Data/fetchAbilityScoresData";

const abilityScoresSlice = createSlice({
    name: "abilityScores",
    initialState: {
        data: [],
        selectedAbilityScores: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAbilityScoresData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAbilityScoresData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.selectedAbilityScores = null; // Reset selectedAbilityScores when fetching the list
            })
            .addCase(fetchAbilityScoresData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchAbilityScoresDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedAbilityScores = action.payload; // Update selectedAbilityScores when fetching the details
            })
            .addCase(fetchAbilityScoresDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default abilityScoresSlice.reducer;

export const { } = abilityScoresSlice.actions;