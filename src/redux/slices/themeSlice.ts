import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../../types";

const initialState = {
    theme: "dark",
} satisfies Theme as Theme;

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        lightMode: (state, _) => {
            state.theme = "light";
        },
        darkMode: (state, _) => {
            state.theme = "dark";
        },
        cupCakeMode: (state, _) => {
            state.theme = "cupcake";
        },
    },
});

export const { lightMode, darkMode, cupCakeMode } = themeSlice.actions;
export const themeSelector = (state: any) => state.theme.theme;
export const themeReducer = themeSlice.reducer;
