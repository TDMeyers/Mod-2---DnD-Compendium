import { createSlice } from "@reduxjs/toolkit";
import { fetchSkillsData } from "../../Thunks/Races/fetchRacesData";

const skillsSlice = createSlice({
    name: "skills",
    initialState: {
        data: [],
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
            });
    },
});

export default skillsSlice.reducer;