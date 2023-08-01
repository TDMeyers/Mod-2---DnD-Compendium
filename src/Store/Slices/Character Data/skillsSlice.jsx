import { createSlice } from "@reduxjs/toolkit";
import { fetchSkillsData, fetchSkillDetails } from "../../Thunks/Character Data/fetchSkillsData";

const skillsSlice = createSlice({
    name: "skills",
    initialState: {
        data: [],
        selectedSkill: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkillsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSkillsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchSkillsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchSkillDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSkillDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedSkill = action.payload;
            })
            .addCase(fetchSkillDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default skillsSlice.reducer;
