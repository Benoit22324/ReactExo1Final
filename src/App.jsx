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
              <Route path='/ReactExo1Final/' Component={Home} />
              <Route path='/ReactExo1Final/characters' Component={Characters} />
              <Route path='/ReactExo1Final/character/:name' Component={Character} />
              <Route path='/ReactExo1Final/credit' Component={Credit} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
