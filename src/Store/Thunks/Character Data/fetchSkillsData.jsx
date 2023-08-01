import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSkillsData = createAsyncThunk(
    "skills/fetchData",
    async (skillsUrl) => {
        const api = `https://www.dnd5eapi.co${skillsUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);