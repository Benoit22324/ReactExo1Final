import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import { Navbar } from './components/Navbar'
import { Provider } from "react-redux"
import { store } from '../store/store'
import { Home } from './pages/Home'
import { Characters } from './pages/Characters'
import { Character } from './pages/Character'

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/reactexo1final/' Component={Home} />
            <Route path='/reactexo1final/characters' Component={Characters} />
            <Route path='/reactexo1final/character/:name' Component={Character} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App