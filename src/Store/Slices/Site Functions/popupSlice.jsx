import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showPopup: false,
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
    },
});

export const { setShowPopup, setPopupContent } = popupSlice.actions;

export default popupSlice.reducer;