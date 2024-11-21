export const DisplayPassive = ({passive}) => {
    return <>
        <div>
            <h3>{passive.name}</h3>
            <h4>{passive.unlock}</h4>
            <p><strong>Description :</strong> {passive.description}</p>
        </div>
    </>
}