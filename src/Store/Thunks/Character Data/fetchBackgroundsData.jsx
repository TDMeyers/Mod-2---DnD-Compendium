import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBackgroundsData = createAsyncThunk(
    "backgrounds/fetchData",
    async (backgrounds) => {
        const api = `https://www.dnd5eapi.co${backgrounds}`;
        const response = await fetch(api);
        const data = await response.json();
        return data.results;
    }
);

export const fetchBackgroundsDetails = createAsyncThunk(
    "backgrounds/fetchBackgroundsDetails",
    async (backgroundUrl) => {
        const response = await fetch(`https://www.dnd5eapi.co${backgroundUrl}`);
        const data = await response.json();
        return { ...data };
    }
);