import { useParams } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../store/selector/character";
import { fetchCharacter } from "../../store/reducer/CharacterReducer";
import { CharacterDisplay } from "../components/CharacterDisplay";

export const Character = () => {
    const { name } = useParams();
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(fetchCharacter(name));
    }, [])

    return <>
        { loading ? <p>Fetching Character Data...</p>
            : <CharacterDisplay />
        }
    </>
}