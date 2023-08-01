import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRuleData = createAsyncThunk(
    "rules/fetchRuleData",
    async (ruleIndex) => {
        const api = `https://www.dnd5eapi.co/api/rules/${ruleIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchRuleSectionData = createAsyncThunk(
    "rules/fetchRuleSectionData",
    async (sectionIndex) => {
        const api = `https://www.dnd5eapi.co/api/rule-sections/${sectionIndex}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);