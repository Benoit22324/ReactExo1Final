import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
    "character/fetchCharacters",
    async () => {
        const response = await axios.get("https://genshin.jmp.blue/characters");
        return response.data;
    }
)

export const fetchCharacter = createAsyncThunk(
    "character/fetchCharacter",
    async (name) => {
        const response = await axios.get(`https://genshin.jmp.blue/characters/${name}`);
        return response.data;
    }
)

const CharacterReducer = createSlice({
    name: "character",
    initialState: {
        charactersList: [],
        loading: false,
        selectedCharacter: "",
        choosenCharacter: {},
    },
    reducers: {
        setSelectedCharacter(state, action) {
            state.selectedCharacter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.charactersList = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchCharacter.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchCharacter.fulfilled, (state, action) => {
            state.choosenCharacter = action.payload;
            state.loading = false;
        })
    }
})

export const {
    setSelectedCharacter,
} = CharacterReducer.actions;

export default CharacterReducer.reducer;