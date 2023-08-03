import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAlignmentsData = createAsyncThunk(
  "alignments/fetchData",
  async (alignments) => {
    const api = `https://www.dnd5eapi.co${alignments}`; 
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
