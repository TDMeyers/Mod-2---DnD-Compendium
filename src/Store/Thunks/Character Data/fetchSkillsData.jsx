import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSkillsData = createAsyncThunk(
    "skills/fetchSkillsData",
    async () => {
        const api = `https://www.dnd5eapi.co/api/skills`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchSkillDetails = createAsyncThunk(
    "skills/fetchSkillDetails",
    async (skillIndex) => {
        const api = `https://www.dnd5eapi.co/api/skills/${skillIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);