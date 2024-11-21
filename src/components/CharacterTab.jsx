import { Link } from "react-router-dom"
import { cleanName } from "../utils/cleanName";

export const CharacterTab = ({name}) => {
    return <>
        <Link className="characterTabBox" to={`/ReactExo1Final/character/${name}`}>
            <p>{cleanName(name)}</p>
        </Link>
    </>
}