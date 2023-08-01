import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/GameMechanics">
                <div>GameMechanics</div>
            </Link>
            <Link to="/CharacterData">
                <div>Character Data</div>
            </Link>
            <Link to="/Spells">
                <div>Spells</div>
            </Link>
            <Link to="/Monsters">
                <div>Monsters</div>
            </Link>
        </div>
    )
}