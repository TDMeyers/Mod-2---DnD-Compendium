import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchClassesData = createAsyncThunk(
    "classes/fetchData",
    async (classesUrl) => {
        const api = `https://www.dnd5eapi.co${classesUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data.results;
    }
);

export const fetchClassSpellcasting = createAsyncThunk(
    "classes/fetchSpellcasting",
    async (spellcastingUrl) => {
        const api = `https://www.dnd5eapi.co${spellcastingUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchClassMultiClassing = createAsyncThunk(
    "classes/fetchMultiClassing",
    async (multiClassingUrl) => {
        const api = `https://www.dnd5eapi.co${multiClassingUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);