import { createSlice } from "@reduxjs/toolkit";
import { fetchFeatsData } from "../../Thunks/FeatsAndFeatures/fetchFeatsData";
import { fetchFeatData } from "../../Thunks/FeatsAndFeatures/fetchFeatsData";

const featsSlice = createSlice({
    name: "feats",
    initialState: {
        data: [],
        selectedFeat: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeatsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFeatsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchFeatsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchFeatData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFeatData.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedFeat = action.payload;
            })
            .addCase(fetchFeatData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default featsSlice.reducer;