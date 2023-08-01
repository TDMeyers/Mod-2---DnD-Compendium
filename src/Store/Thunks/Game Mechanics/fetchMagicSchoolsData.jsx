import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMagicSchoolsData = createAsyncThunk(
    "magicSchools/fetchData",
    async () => {
        const api = "https://www.dnd5eapi.co/api/magic-schools";
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchMagicSchoolData = createAsyncThunk(
    "magicSchools/fetchMagicSchoolData",
    async (magicSchoolIndex) => {
        const api = `https://www.dnd5eapi.co/api/magic-schools/${magicSchoolIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);