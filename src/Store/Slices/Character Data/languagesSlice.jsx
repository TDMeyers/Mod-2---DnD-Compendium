import { createSlice } from "@reduxjs/toolkit";
import { fetchLanguagesData } from "../../Thunks/Character Data/fetchLanguagesData";

const languagesSlice = createSlice({
    name: "languages",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLanguagesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLanguagesData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchLanguagesData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default languagesSlice.reducer;