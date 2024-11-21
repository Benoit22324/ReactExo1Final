import { useDispatch, useSelector } from "react-redux"
import { selectCharacter, selectCharactersList } from "../../store/selector/character";
import { setSelectedCharacter } from "../../store/reducer/CharacterReducer";
import { useNavigate } from "react-router-dom";
import { uncleanName } from "../utils/uncleanName";
import { useState } from "react";

export const CharacterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedCharacter = useSelector(selectCharacter);
    const charactersList = useSelector(selectCharactersList);
    const [error, setError] = useState("");

    const handleValue = (e) => {
        const value = e.target.value;

        if (value.trim() !== "" || value.trim() === "") {
            dispatch(setSelectedCharacter(value));
            setError("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const revertName = uncleanName(selectedCharacter);

        const existInDataBase = charactersList.find(character => character === revertName);

        if (selectedCharacter.trim() !== "" && existInDataBase) {
            navigate(`/reactexo1final/character/${revertName}`);
        }
        else if (selectedCharacter.trim() === "" && !existInDataBase) {
            setError("Veuillez saisir le nom d'un personnage");
        }
        else {
            setError("Le personnage que vous cherchez n'existe pas");
        }
    }

    return <>
        <h2>Quick Search</h2>
        {
            error !== "" && <p className="errorMessage">{error}</p>
        }
        <form className="characterForm" onSubmit={(e) => handleSubmit(e)}>
            <input className="characterInput" type="text" value={selectedCharacter} onChange={(e) => handleValue(e)} />
            <button className="characterSubmit">Search</button>
        </form>
    </>
}