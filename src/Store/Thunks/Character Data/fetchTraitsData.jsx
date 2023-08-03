import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTraitsData = createAsyncThunk(
    "traits/fetchData",
    async (traits) => {
        const api = `https://www.dnd5eapi.co${traits}`;
        const response = await fetch(api);
        const data = await response.json();
        return data.results;
    }
);

export const fetchTraitData = createAsyncThunk(
    "traits/fetchTraitData",
    async (traitIndex) => {
        const api = `https://www.dnd5eapi.co${traitIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);