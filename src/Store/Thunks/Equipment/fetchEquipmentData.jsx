import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEquipmentData = createAsyncThunk(
    "equipment/fetchData",
    async (equipmentUrl) => {
        const api = `https://www.dnd5eapi.co${equipmentUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchEquipmentCategoriesData = createAsyncThunk(
    "equipment/fetchCategoriesData",
    async (equipmentCategoriesUrl) => {
        const api = `https://www.dnd5eapi.co${equipmentCategoriesUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchMagicItemsData = createAsyncThunk(
    "equipment/fetchMagicItemsData",
    async (magicItemsUrl) => {
        const api = `https://www.dnd5eapi.co${magicItemsUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);

export const fetchWeaponPropertiesData = createAsyncThunk(
    "equipment/fetchWeaponPropertiesData",
    async (weaponPropertiesUrl) => {
        const api = `https://www.dnd5eapi.co${weaponPropertiesUrl}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
    }
);