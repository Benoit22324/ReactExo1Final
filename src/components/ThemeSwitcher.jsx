import { useDispatch, useSelector } from "react-redux"
import { selectDarkMode } from "../../store/selector/theme"
import { setDarkMode } from "../../store/reducer/ThemeReducer";

export const ThemeSwitcher = () => {
    const dispatch = useDispatch()
    const darkMode = useSelector(selectDarkMode);

    const handleSwitch = () => {
        dispatch(setDarkMode());
        document.body.classList.toggle('bodyDarkMode');
    }

    return <>
        <button onClick={() => handleSwitch()} className={darkMode ? "themeSwitcherDarkMode" : "themeSwitcher"}>Switch</button>
    </>
}