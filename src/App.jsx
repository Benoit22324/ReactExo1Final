import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Characters } from './pages/Characters'
import { Character } from './pages/Character'
import { Credit } from './pages/Credit'
import { useSelector } from 'react-redux'
import { selectDarkMode } from '../store/selector/theme'

function App() {
  const darkMode = useSelector(selectDarkMode);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <div className={darkMode ? 'mainBodyDarkMode' : 'mainBody'}>
          <Routes>
            <Route path='/ReactExo1Final/' Component={Home} />
            <Route path='/ReactExo1Final/characters' Component={Characters} />
            <Route path='/ReactExo1Final/character/:name' Component={Character} />
            <Route path='/ReactExo1Final/credit' Component={Credit} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
