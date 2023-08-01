import { createSlice } from "@reduxjs/toolkit";
import { fetchFeatsData } from "../../Thunks/Character Data/fetchFeatsData";

const featsSlice = createSlice({
    name: "feats",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeatsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFeatsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchFeatsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default featsSlice.reducer;