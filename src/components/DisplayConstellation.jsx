export const DisplayConstellation = ({constellation}) => {
    return <>
        <div>
            <h3>{constellation.level} - {constellation.name}</h3>
            <p><strong>Description :</strong> {constellation.description}</p>
        </div>
    </>
}