import { createSlice } from "@reduxjs/toolkit";
import { fetchDamageTypesData } from "../../Thunks/Game Mechanics/fetchDamageTypesData";
import { fetchDamageTypeData } from "../../Thunks/Game Mechanics/fetchDamageTypesData";

const damageTypesSlice = createSlice({
    name: "damageTypes",
    initialState: {
        data: [],
        selectedDamageType: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDamageTypesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDamageTypesData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDamageTypesData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchDamageTypeData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDamageTypeData.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedDamageType = action.payload;
            })
            .addCase(fetchDamageTypeData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default damageTypesSlice.reducer;