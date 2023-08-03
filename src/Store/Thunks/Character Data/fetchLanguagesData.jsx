import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLanguagesData = createAsyncThunk(
    "languages/fetchData",
    async (languages) => {
        const api = `https://www.dnd5eapi.co${languages}`;
        const response = await fetch(api);
        const data = await response.json();
        return data.results;
    }
);

export const fetchLanguageDetails = createAsyncThunk(
    "languages/fetchLanguageDetails",
    async (languageURL) => {
        const response = await fetch(`https://www.dnd5eapi.co${languageURL}`);
        const data = await response.json();
        console.log(data);
        return data;
        
    }
);