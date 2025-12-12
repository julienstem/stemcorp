import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Header.tsx'
import SongsList from './songs.tsx'
import SongPagesDetail from './components/SongPagesDetail.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <Header />
            <SongsList />
          </div>
        } />
        <Route path="/songs/:title" element={
          <div className="song-page-detail-app">
            <Header />
            <SongPagesDetail />
          </div>
        } />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>

    </>
  )
}

export default App
