import { useDispatch, useSelector } from "react-redux"
import { selectCharacter } from "../../store/selector/character";
import { setSelectedCharacter } from "../../store/reducer/CharacterReducer";
import { useNavigate } from "react-router-dom";

export const CharacterForm = () => {
    const dispatch = useDispatch();
    const selectedCharacter = useSelector(selectCharacter);

    const handleValue = (e) => {
        const value = e.target.value;

        if (value.trim() || value.trim() === "") {
            dispatch(setSelectedCharacter(value));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        useNavigate(`/reactexo1final/character/${selectedCharacter}`);
    }

    return <>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" value={selectedCharacter} onChange={(e) => handleValue(e)} />
            <button>Search</button>
        </form>
    </>
}