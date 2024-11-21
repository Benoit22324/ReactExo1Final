import { Link } from "react-router-dom"
import { ThemeSwitcher } from "./ThemeSwitcher"
import { useSelector } from "react-redux"
import { selectDarkMode } from "../../store/selector/theme"

export const Navbar = () => {
    const darkMode = useSelector(selectDarkMode);

    return <div className={darkMode ? "navbarDarkMode" : "navbar"}>
        <Link className={darkMode ? "navLinkDarkMode" : "navLink"} to="/ReactExo1Final/">Home</Link>
        <Link className={darkMode ? "navLinkDarkMode" : "navLink"} to="/ReactExo1Final/characters">Characters</Link>
        <Link className={darkMode ? "navLinkDarkMode" : "navLink"} to="/ReactExo1Final/credit">Credit</Link>
        <ThemeSwitcher />
    </div>
}