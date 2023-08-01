import { createSlice } from "@reduxjs/toolkit";
import { fetchMagicSchoolsData } from "../../Thunks/Game Mechanics/fetchMagicSchoolsData";
import { fetchMagicSchoolData } from "../../Thunks/Game Mechanics/fetchMagicSchoolsData";

const magicSchoolsSlice = createSlice({
  name: "magicSchools",
  initialState: {
    data: [],
    selectedMagicSchool: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMagicSchoolsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMagicSchoolsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMagicSchoolsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchMagicSchoolData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMagicSchoolData.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedMagicSchool = action.payload;
      })
      .addCase(fetchMagicSchoolData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default magicSchoolsSlice.reducer;
