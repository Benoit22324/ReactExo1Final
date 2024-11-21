import { useDispatch, useSelector } from "react-redux"
import { selectCharactersList, selectLoading } from "../../store/selector/character"
import { useEffect } from "react";
import { fetchCharacters } from "../../store/reducer/CharacterReducer";
import { CharacterTab } from "./CharacterTab";

export const CharactersTab = () => {
    const dispatch = useDispatch();
    const charactersList = useSelector(selectCharactersList);
    const loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchCharacters());
    }, [])

    return <>
        <h2>Characters List</h2>
        {
            loading ? <p>Fetching characters...</p>
            : <div className="characterTabList">
                {charactersList.map(character => <CharacterTab key={character} name={character} />)}
            </div>
        }
    </>
}