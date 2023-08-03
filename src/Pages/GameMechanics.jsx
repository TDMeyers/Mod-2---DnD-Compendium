import DisplayConditions from "../components/Game Mechanics/DisplayConditions";
import DisplayDamageTypes from "../components/Game Mechanics/DisplayDamageTypes";
import DisplayMagicSchools from "../components/Game Mechanics/DisplayMagicSchools";

export default function GameMechanics() {
    return (
        <div>
            <DisplayConditions />
            <DisplayDamageTypes />
            <DisplayMagicSchools />
        </div>
    )
}