import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFeatsData = createAsyncThunk(
    "feats/fetchData",
    async (featsUrl) => {
        const api = `https://www.dnd5eapi.co${featsUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);