import { configureStore } from "@reduxjs/toolkit";
import CharacterReducer from "./reducer/CharacterReducer";
import ThemeReducer from "./reducer/ThemeReducer";

export const store = configureStore({
    reducer: {
        character: CharacterReducer,
        theme: ThemeReducer,
    }
})