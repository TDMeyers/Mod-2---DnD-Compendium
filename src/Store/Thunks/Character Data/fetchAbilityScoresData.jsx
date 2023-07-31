import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAbilityScoresData = createAsyncThunk(
    "abilityScores/fetchData",
    async () => {
        const api = "https://www.dnd5eapi.co/api/ability-scores/";
        const response = await fetch(api);
        const data = await response.json();
        return data.results;
    }
);

export const fetchAbilityScoresDetails = createAsyncThunk(
    "abilityScores/fetchAbilityScoresDetails",
    async (abilityScoresUrl) => {
        const response = await fetch(`https://www.dnd5eapi.co${abilityScoresUrl}`);
        const data = await response.json();
        return data;
    }
);