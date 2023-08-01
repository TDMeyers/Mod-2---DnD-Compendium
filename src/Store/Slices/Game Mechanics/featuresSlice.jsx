import { createSlice } from "@reduxjs/toolkit";
import { fetchFeaturesData } from "../../Thunks/FeatsAndFeatures/fetchFeaturesData";
import { fetchFeatureData } from "../../Thunks/FeatsAndFeatures/fetchFeaturesData";

export const fetchFeatureData = createAsyncThunk(
    "features/fetchFeatureData",
    async (featureIndex) => {
        const api = `https://www.dnd5eapi.co/api/features/${featureIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

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