// src/store/thunks/fetchAlignmentsData.js

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGameData = createAsyncThunk(
  "gamedata/fetchData",
  async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    return data.results;
  }
);
