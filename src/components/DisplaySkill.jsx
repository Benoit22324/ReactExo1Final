export const DisplaySkill = ({skill}) => {
    return <>
        <div>
            <h3>{skill.name} ({skill.unlock})</h3>
            <p><strong>Description :</strong> {skill.description}</p>
            <div>
                <h4>{skill.unlock} Info</h4>
                {skill.upgrades.map(atkDesc => 
                    <p>{atkDesc.name} | {atkDesc.value}</p>
                )}
            </div>
        </div>
    </>
}