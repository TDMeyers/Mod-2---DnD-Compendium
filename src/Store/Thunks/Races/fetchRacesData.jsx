import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRacesData = createAsyncThunk(
    "races/fetchData",
    async (racesUrl) => {
        const api = `https://www.dnd5eapi.co${racesUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data.results;
    }
);

export const fetchRaceSubracesData = createAsyncThunk(
    "races/fetchSubracesData",
    async (raceSubracesUrl) => {
        const api = `https://www.dnd5eapi.co${raceSubracesUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchRaceProficienciesData = createAsyncThunk(
    "races/fetchProficienciesData",
    async (raceProficienciesUrl) => {
        const api = `https://www.dnd5eapi.co${raceProficienciesUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchRaceTraitsData = createAsyncThunk(
    "races/fetchTraitsData",
    async (raceTraitsUrl) => {
        const api = `https://www.dnd5eapi.co${raceTraitsUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);