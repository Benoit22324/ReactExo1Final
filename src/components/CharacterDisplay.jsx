import { useSelector } from "react-redux"
import { selectChoosenCharacter } from "../../store/selector/character"
import { cleanBirthday } from "../utils/cleanBirthday";
import { DisplaySkill } from "./DisplaySkill";
import { DisplayPassive } from "./DisplayPassive";
import { DisplayConstellation } from "./DisplayConstellation";

export const CharacterDisplay = () => {
    const choosenCharacter = useSelector(selectChoosenCharacter);

    return <>
        {choosenCharacter.name && <>
            <h1>{choosenCharacter.name}</h1>
            <div className="characterInfoContainer">
                <div className="characterMainPassiveInfo">
                    <div className="characterMainInfo">
                        <h2>Main Information</h2>
                        <p>Weapon Type : {choosenCharacter.weapon}</p>
                        <p>Vision Element : {choosenCharacter.vision}</p>
                        <p>Rarity : {choosenCharacter.rarity} Stars</p>
                        <p>Birthday : {cleanBirthday(choosenCharacter.birthday)} (MM-DD)</p>
                        <p>Nation : {choosenCharacter.nation}</p>
                        <p>Release Date : {choosenCharacter.release} (YYYY-MM-DD)</p>
                    </div>
                    <div className="characterPassiveInfo">
                        <h2>Passive Talents</h2>
                        {
                            choosenCharacter.passiveTalents.map(passive => <DisplayPassive key={passive.name} passive={passive} />)
                        }
                    </div>
                </div>
                <div className="characterSkillsInfo">
                    <h2>Skills</h2>
                    {
                        choosenCharacter.skillTalents.map(skill => <DisplaySkill key={skill.name} skill={skill} />)
                    }
                </div>
                <div className="characterConstellationsSection">
                    <div className="characterConstellationsInfo">
                        <h2>Constellations</h2>
                        {
                            choosenCharacter.constellations.map(constellation => <DisplayConstellation key={constellation.name} constellation={constellation} />)
                        }
                    </div>
                </div>
            </div>
        </>}
    </>
}