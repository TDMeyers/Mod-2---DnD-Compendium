import { createSlice } from "@reduxjs/toolkit";
import { fetchBackgroundsData, fetchBackgroundsDetails } from "../../Thunks/Character Data/fetchBackgroundsData";

const backgroundsSlice = createSlice({
    name: "backgrounds",
    initialState: {
        data: [],
        selectedBackgrounds: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBackgroundsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBackgroundsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.selectedAbilityScores = null;
            })
            .addCase(fetchBackgroundsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchBackgroundsDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedBackgrounds = action.payload;
            })
            .addCase(fetchBackgroundsDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default backgroundsSlice.reducer;

export const { } = backgroundsSlice.actions;