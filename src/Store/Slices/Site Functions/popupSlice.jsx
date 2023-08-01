import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showPopup: false,
    hoveredSkill: null,
    popupContent: {
        title: "",
        description: "",
    },
};

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        setShowPopup(state, action) {
            state.showPopup = action.payload;
        },
        setPopupContent(state, action) {
            state.popupContent = action.payload;
        },
        setHoveredSkill(state, action) {
            state.hoveredSkill = action.payload;
        },
    },
});

export const { setShowPopup, setPopupContent, setHoveredSkill } = popupSlice.actions;

export default popupSlice.reducer;