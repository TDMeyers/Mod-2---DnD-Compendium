import { createSlice } from "@reduxjs/toolkit";
import { fetchProficienciesData } from "../../Thunks/Character Data/fetchProficienciesData";

const proficienciesSlice = createSlice({
    name: "proficiencies",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProficienciesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProficienciesData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchProficienciesData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default proficienciesSlice.reducer;
