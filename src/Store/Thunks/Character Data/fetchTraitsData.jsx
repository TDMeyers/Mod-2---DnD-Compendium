import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTraitsData = createAsyncThunk(
    "traits/fetchData",
    async () => {
        const api = "https://www.dnd5eapi.co/api/traits";
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchTraitData = createAsyncThunk(
    "traits/fetchTraitData",
    async (traitIndex) => {
        const api = `https://www.dnd5eapi.co/api/traits/${traitIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);