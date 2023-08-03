import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProficienciesData = createAsyncThunk(
    "proficiencies/fetchData",
    async (proficienciesUrl) => {
        const api = `https://www.dnd5eapi.co${proficienciesUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data.results;
    }
);