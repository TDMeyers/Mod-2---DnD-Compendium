import { createSlice } from "@reduxjs/toolkit";

const gameMechanicsSlice = createSlice({
  name: "gameMechanics",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    alignmentsDataRequested: (state) => {
      state.loading = true;
      state.error = null;
    },
    alignmentsDataReceived: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    alignmentsDataFailed: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default gameMechanicsSlice.reducer;

export const {} = gameMechanicsSlice.actions;
