import './App.css'
import { Routes, Route } from 'react-router-dom'
import SongsPage from './pages/songs-home-page/songs-home-page.tsx'
import SongPagesDetail from './pages/song-pages/SongPagesDetail.tsx'
import SongsListWithSelector from './pages/all-songs/SongsList.tsx'
import Header from './components/header/Header.tsx'
import { Footer } from './components/footer/Footer.tsx'

function App() {

  return (
    <>
    <main>
      <Header />
      <Routes>
        <Route path="/" element={
          <SongsPage />
        } />
        <Route path="/songs/:title" element={
            <SongPagesDetail />
        } />
        <Route path="/all-songs" element={
            <SongsListWithSelector />
        } />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
      <Footer />
    </main>
    </>
  )
}

export default App
