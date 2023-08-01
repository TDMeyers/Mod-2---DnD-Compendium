import { createSlice } from "@reduxjs/toolkit";
import { fetchEquipmentData } from "../../Thunks/Equipment/fetchEquipmentData";
import { fetchEquipmentCategoriesData } from "../../Thunks/Equipment/fetchEquipmentData";
import { fetchMagicItemsData } from "../../Thunks/Equipment/fetchEquipmentData";
import { fetchWeaponPropertiesData } from "../../Thunks/Equipment/fetchEquipmentData";

const equipmentSlice = createSlice({
    name: "equipment",
    initialState: {
        data: [],
        categories: [],
        magicItems: [],
        weaponProperties: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEquipmentData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEquipmentData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchEquipmentData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchEquipmentCategoriesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEquipmentCategoriesData.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(fetchEquipmentCategoriesData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchMagicItemsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMagicItemsData.fulfilled, (state, action) => {
                state.loading = false;
                state.magicItems = action.payload;
            })
            .addCase(fetchMagicItemsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchWeaponPropertiesData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeaponPropertiesData.fulfilled, (state, action) => {
                state.loading = false;
                state.weaponProperties = action.payload;
            })
            .addCase(fetchWeaponPropertiesData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default equipmentSlice.reducer;