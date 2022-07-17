import './App.css'
import Home from './views/home/Home'
import Logo from './assets/svg/Logo'
import Detail from './views/details/Detail'
import { Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import Characters from './views/characters/Characters'
import Episode from './views/episodes/Episode'
import EpisodeDetail from './views/episodeDetail/EpisodeDetail'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Detail/:id' element={<Detail />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/episodes' element={<Episode />} />
        <Route path='/Episode/:episodeId' element={<EpisodeDetail />} />
      </Routes>
    </div>
  )
}

export default App
