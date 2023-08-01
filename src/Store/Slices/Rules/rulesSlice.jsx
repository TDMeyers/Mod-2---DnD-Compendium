import { createSlice } from "@reduxjs/toolkit";
import { fetchRuleData } from "../../Thunks/Rules/fetchRulesData";
import { fetchRuleSectionData } from "../../Thunks/Rules/fetchRulesData";

const rulesSlice = createSlice({
    name: "rules",
    initialState: {
        selectedRule: null,
        selectedRuleSection: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRuleData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRuleData.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedRule = action.payload;
            })
            .addCase(fetchRuleData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchRuleSectionData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRuleSectionData.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedRuleSection = action.payload;
            })
            .addCase(fetchRuleSectionData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default rulesSlice.reducer;