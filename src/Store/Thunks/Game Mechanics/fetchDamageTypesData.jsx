import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDamageTypesData = createAsyncThunk(
    "damageTypes/fetchData",
    async () => {
        const api = "https://www.dnd5eapi.co/api/damage-types";
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchDamageTypeData = createAsyncThunk(
    "damageTypes/fetchDamageTypeData",
    async (damageTypeIndex) => {
        const api = `https://www.dnd5eapi.co/api/damage-types/${damageTypeIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);