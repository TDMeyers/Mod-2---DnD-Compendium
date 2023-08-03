import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSpellsData = createAsyncThunk(
    "spells/fetchData",
    async (spells) => {
        const api = `https://www.dnd5eapi.co${spells}`;
        const response = await fetch(api);
        const data = await response.json();
        return data.results;
    }
);

export const fetchSpellData = createAsyncThunk(
    "spells/fetchSpellData",
    async (spellIndex) => {
        const api = `https://www.dnd5eapi.co${spellIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);