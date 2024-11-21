import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { cleanName } from "../utils/cleanName";

export const CharacterTab = ({name}) => {
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
        setDisplayName(cleanName(name));
    }, [])

    return <>
        <Link className="characterTabBox" to={`/reactexo1final/character/${name}`}>
            <p>{displayName}</p>
        </Link>
    </>
}