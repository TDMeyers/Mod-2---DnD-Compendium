import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeaturesData = createAsyncThunk(
    "features/fetchData",
    async () => {
        const api = "https://www.dnd5eapi.co/api/features";
        const response = await fetch(api);
        const data = await response.json();
        return data.results;
    }
);

export const fetchFeatureData = createAsyncThunk(
    "features/fetchFeatureData",
    async (featureIndex) => {
        const api = `https://www.dnd5eapi.co/api/features/${featureIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);