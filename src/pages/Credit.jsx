import {useState } from "react"

export const Credit = () => {
    const [cheers, setCheers] = useState(0);

    return <>
        <h1>Credit</h1>
        <p>Api Genshin : https://genshin.jmp.blue/</p>
        <p>Made by : Marvin "NurMarvin" Witt</p>
        <p>Link to the API page : <a href="https://genshin.dev">https://genshin.dev</a></p>
        <button className="cheerButton" onClick={() => setCheers(cheers + 1)}>Cheer for it</button>
        <p>Number of time you cheered : {cheers}</p>
    </>
}