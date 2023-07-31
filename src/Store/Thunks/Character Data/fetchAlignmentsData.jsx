import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk with an additional 'alignment' parameter
export const fetchAlignmentsData = createAsyncThunk(
  "alignments/fetchData",
  async (alignments) => {
    const api = `https://www.dnd5eapi.co${alignments}`; // Modify the API URL to include the 'alignment' parameter
    const response = await fetch(api);
    const data = await response.json();
    return data.results;
  }
);

export const fetchAlignmentDetails = createAsyncThunk(
  "alignments/fetchAlignmentDetails",
  async (alignmentUrl) => {
    const response = await fetch(`https://www.dnd5eapi.co${alignmentUrl}`);
    const data = await response.json();
    return { ...data, description: data.desc };
  }
);
