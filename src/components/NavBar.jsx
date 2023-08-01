import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/Class">
                <div>Class</div>
            </Link>
            <Link to="/Equipment">
                <div>Equipment</div>
            </Link>
            <Link to="/FeatsAndFeatures">
                <div>Feats And Features</div>
            </Link>
            <Link to="/GameMechanics">
                <div>GameMechanics</div>
            </Link>
            <Link to="/Monsters">
                <div>Monsters</div>
            </Link>
            <Link to="/Races">
                <div>Races</div>
            </Link>
            <Link to="/Rules">
                <div>Rules</div>
            </Link>
            <Link to="/Spells">
                <div>Spells</div>
            </Link>
        </div>
    )
}