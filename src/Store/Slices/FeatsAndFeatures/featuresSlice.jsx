import { createSlice } from "@reduxjs/toolkit";
import { fetchFeaturesData } from "../../Thunks/FeatsAndFeatures/fetchFeaturesData";
import { fetchFeatureData } from "../../Thunks/FeatsAndFeatures/fetchFeaturesData";

const featuresSlice = createSlice({
    name: "features",
    initialState: {
        data: [],
        selectedFeature: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeaturesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFeaturesData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchFeaturesData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchFeatureData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFeatureData.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedFeature = action.payload;
            })
            .addCase(fetchFeatureData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default featuresSlice.reducer;