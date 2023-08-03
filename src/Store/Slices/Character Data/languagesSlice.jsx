import { createSlice } from "@reduxjs/toolkit";
import { fetchLanguagesData, fetchLanguageDetails } from "../../Thunks/Character Data/fetchLanguagesData";

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
            })
            .addCase(fetchLanguageDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLanguageDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchLanguageDetails.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default languagesSlice.reducer;