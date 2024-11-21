import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './assets/css/App.css'
import { Navbar } from './components/Navbar'
import { Provider } from "react-redux"
import { store } from '../store/store'
import { Home } from './pages/Home'
import { Characters } from './pages/Characters'
import { Character } from './pages/Character'
import { Credit } from './pages/Credit'

function App() {
  // API : https://genshin.jmp.blue/characters/
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />

          <div className='mainBody'>
            <Routes>
              <Route path='/reactexo1final/' Component={Home} />
              <Route path='/reactexo1final/characters' Component={Characters} />
              <Route path='/reactexo1final/character/:name' Component={Character} />
              <Route path='/reactexo1final/credit' Component={Credit} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
