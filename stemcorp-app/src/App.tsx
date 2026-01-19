import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './Header.tsx'
import Songs from './songs.tsx'
import SongPagesDetail from './components/SongPagesDetail.tsx'
import { Footer } from './Footer.tsx'
import SongsList from './components/SongsList.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <Header />
            <Songs />
            <Footer />
          </div>
        } />
        <Route path="/songs/:title" element={
          <div className="song-page-detail-app">
            <Header />
            <SongPagesDetail />
            <Footer />
          </div>
        } />
        <Route path="/all-songs" element={
          <div className="all-songs-app">
            <Header />
            <SongsList />
            <Footer />
          </div>
        } />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>

    </>
  )
}

export default App
