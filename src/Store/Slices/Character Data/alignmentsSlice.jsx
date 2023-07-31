import { createSlice } from "@reduxjs/toolkit";
import { fetchAlignmentsData } from "../../Thunks/Character Data/fetchAlignmentsData";
import { fetchAlignmentDetails } from "../../Thunks/Character Data/fetchAlignmentsData";

const alignmentsSlice = createSlice({
  name: "alignments",
  initialState: {
    data: [],
    selectedAlignment: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlignmentsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlignmentsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAlignmentsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAlignmentDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlignmentDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedAlignment = action.payload; // Store the fetched alignment details
      })
      .addCase(fetchAlignmentDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default alignmentsSlice.reducer;

export const {} = alignmentsSlice.actions;
