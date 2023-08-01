import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRuleData = createAsyncThunk(
    "rules/fetchRuleData",
    async (ruleIndex) => {
        const api = `https://www.dnd5eapi.co${ruleIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data.results;
    }
);

export const fetchRuleSectionData = createAsyncThunk(
    "rules/fetchRuleSectionData",
    async (sectionIndex) => {
        const api = `https://www.dnd5eapi.co${sectionIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);