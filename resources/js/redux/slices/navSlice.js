import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nav: false,
};

export const navSlice = createSlice({
    name: "nav",
    initialState,

    reducers: {
        toggle: (state) => {
            state.nav = !state.nav;
        },
        hide: (state) => {
            state.nav = false;
        },
        show: (state) => {
            state.nav = true;
        },
    },
});

export const { toggle, show, hide } = navSlice.actions;
export const selectNav = (state) => state.nav.nav;

export default navSlice.reducer;
