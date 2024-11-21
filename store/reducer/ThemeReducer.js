import { createSlice } from "@reduxjs/toolkit";

const ThemeReducer = createSlice({
    name: "theme",
    initialState: {
        darkMode: false,
    },
    reducers: {
        setDarkMode(state, action) {
            state.darkMode = !state.darkMode;
        }
    }
})

export const {
    setDarkMode
} = ThemeReducer.actions;

export default ThemeReducer.reducer;