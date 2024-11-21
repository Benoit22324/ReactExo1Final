import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div className="navbar">
        <Link className="navLink" to="/ReactExo1Final/">Home</Link>
        <Link className="navLink" to="/ReactExo1Final/characters">Characters</Link>
        <Link className="navLink" to="/ReactExo1Final/credit">Credit</Link>
    </div>
}