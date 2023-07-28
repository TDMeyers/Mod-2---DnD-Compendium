import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to="/CharacterData">
                <div>Character Data</div>
            </Link>
        </div>
    )
}