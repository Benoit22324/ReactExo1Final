import { Link } from "react-router-dom"
import { cleanName } from "../utils/cleanName";

export const CharacterTab = ({name}) => {
    return <>
        <Link className="characterTabBox" to={`/reactexo1final/character/${name}`}>
            <p>{cleanName(name)}</p>
        </Link>
    </>
}