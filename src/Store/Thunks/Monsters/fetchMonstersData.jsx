import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMonstersData = createAsyncThunk(
    "monsters/fetchData",
    async () => {
        const api = "https://www.dnd5eapi.co/api/monsters";
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchMonsterData = createAsyncThunk(
    "monsters/fetchMonsterData",
    async (monsterIndex) => {
        const api = `https://www.dnd5eapi.co/api/monsters/${monsterIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);