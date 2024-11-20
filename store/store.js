import { configureStore } from "@reduxjs/toolkit";
import CharacterReducer from "./reducer/CharacterReducer";

export const store = configureStore({
    reducer: {
        character: CharacterReducer
    }
})