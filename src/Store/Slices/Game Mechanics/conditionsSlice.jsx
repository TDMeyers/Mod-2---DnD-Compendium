import { createSlice } from "@reduxjs/toolkit";
import { fetchConditionsData } from "../../Thunks/Game Mechanics/fetchConditionsData";
import { fetchConditionData } from "../../Thunks/Game Mechanics/fetchConditionsData";

const conditionsSlice = createSlice({
    name: "conditions",
    initialState: {
        data: [],
        selectedCondition: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchConditionsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchConditionsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchConditionsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchConditionData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchConditionData.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedCondition = action.payload;
            })
            .addCase(fetchConditionData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default conditionsSlice.reducer;