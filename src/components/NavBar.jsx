import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
        </div>
    )
}