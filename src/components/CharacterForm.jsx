import { useDispatch, useSelector } from "react-redux"
import { selectCharacter, selectCharactersList } from "../../store/selector/character";
import { setSelectedCharacter } from "../../store/reducer/CharacterReducer";
import { useNavigate } from "react-router-dom";
import { uncleanName } from "../utils/uncleanName";

export const CharacterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedCharacter = useSelector(selectCharacter);
    const charactersList = useSelector(selectCharactersList);

    const handleValue = (e) => {
        const value = e.target.value;

        if (value.trim() !== "" || value.trim() === "") {
            dispatch(setSelectedCharacter(value));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const revertName = uncleanName(selectedCharacter);

        const existInDataBase = charactersList.find(character => character === revertName);

        if (selectedCharacter.trim() !== "" && existInDataBase) {
            navigate(`/reactexo1final/character/${revertName}`);
        }
    }

    return <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={selectedCharacter} onChange={(e) => handleValue(e)} />
            <button>Search</button>
        </form>
    </>
}