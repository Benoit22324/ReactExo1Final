import { useParams } from "react-router-dom"

export const Character = () => {
    const { name } = useParams();

    return <>
        <h1>{name}</h1>
    </>
}