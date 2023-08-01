import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLanguagesData = createAsyncThunk(
    "languages/fetchData",
    async (languagesUrl) => {
        const api = `https://www.dnd5eapi.co${languagesUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);