import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeatsData = createAsyncThunk(
    "feats/fetchData",
    async () => {
        const api = "https://www.dnd5eapi.co/api/feats";
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchFeatData = createAsyncThunk(
    "feats/fetchFeatData",
    async (featIndex) => {
        const api = `https://www.dnd5eapi.co/api/feats/${featIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);