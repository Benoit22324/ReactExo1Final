import { Link } from "react-router-dom"

export const Navbar = () => {
    return <div className="navbar">
        <Link className="navLink" to="/reactexo1final/">Home</Link>
        <Link className="navLink" to="/reactexo1final/characters">Characters</Link>
        <Link className="navLink" to="/reactexo1final/credit">Credit</Link>
    </div>
}