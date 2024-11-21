import { useParams } from "react-router-dom"
import { cleanName } from "../utils/cleanName";
import { useEffect, useState } from "react";

export const Character = () => {
    const { name } = useParams();
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
        setDisplayName(cleanName(name));
    }, [])
    

    return <>
        <h1>{displayName}</h1>
    </>
}