import { createSlice } from "@reduxjs/toolkit";
import { fetchRacesData } from "../../Thunks/Character Data/fetchRacesData";
import { fetchRaceSubracesData } from "../../Thunks/Character Data/fetchRacesData";
import { fetchRaceProficienciesData } from "../../Thunks/Character Data/fetchRacesData";
import { fetchRaceTraitsData } from "../../Thunks/Character Data/fetchRacesData";

const racesSlice = createSlice({
    name: "races",
    initialState: {
        data: [],
        subraces: [],
        proficiencies: [],
        traits: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRacesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRacesData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchRacesData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchRaceSubracesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRaceSubracesData.fulfilled, (state, action) => {
                state.loading = false;
                state.subraces = action.payload;
            })
            .addCase(fetchRaceSubracesData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchRaceProficienciesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRaceProficienciesData.fulfilled, (state, action) => {
                state.loading = false;
                state.proficiencies = action.payload;
            })
            .addCase(fetchRaceProficienciesData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchRaceTraitsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRaceTraitsData.fulfilled, (state, action) => {
                state.loading = false;
                state.traits = action.payload;
            })
            .addCase(fetchRaceTraitsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default racesSlice.reducer;