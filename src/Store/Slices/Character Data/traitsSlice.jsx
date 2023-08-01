import { createSlice } from "@reduxjs/toolkit";
import { fetchTraitsData } from "../../Thunks/Character Data/fetchTraitsData";
import { fetchTraitData } from "../../Thunks/Character Data/fetchTraitsData";

const traitsSlice = createSlice({
    name: "traits",
    initialState: {
        data: [],
        selectedTrait: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTraitsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTraitsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTraitsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchTraitData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTraitData.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedTrait = action.payload;
            })
            .addCase(fetchTraitData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default traitsSlice.reducer;