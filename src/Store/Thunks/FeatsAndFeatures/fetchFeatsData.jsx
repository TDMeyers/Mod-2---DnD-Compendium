import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeatsData = createAsyncThunk(
    "feats/fetchData",
    async (feats) => {
        const api = `https://www.dnd5eapi.co${feats}`;
        const response = await fetch(api);
        const data = await response.json();
        return data.results;
    }
);

export const fetchFeatData = createAsyncThunk(
    "feats/fetchFeatData",
    async (featIndex) => {
        const api = `https://www.dnd5eapi.co{featIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);