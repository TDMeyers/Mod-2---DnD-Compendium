import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAdventuringData = createAsyncThunk(
  "gamedata/fetchData",
  async (api) => {
    const response = await fetch(api);
    const data = await response.json();
    return data.results;
  }
);
