import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSpellsData = createAsyncThunk(
    "spells/fetchData",
    async () => {
        const api = "https://www.dnd5eapi.co/api/spells";
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchSpellData = createAsyncThunk(
    "spells/fetchSpellData",
    async (spellIndex) => {
        const api = `https://www.dnd5eapi.co/api/spells/${spellIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);