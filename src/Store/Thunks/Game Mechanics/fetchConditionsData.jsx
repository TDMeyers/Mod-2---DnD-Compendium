import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchConditionsData = createAsyncThunk(
    "conditions/fetchData",
    async () => {
        const api = "https://www.dnd5eapi.co/api/conditions";
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchConditionData = createAsyncThunk(
    "conditions/fetchConditionData",
    async (conditionIndex) => {
        const api = `https://www.dnd5eapi.co/api/conditions/${conditionIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);