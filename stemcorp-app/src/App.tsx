import './App.css'
import { Routes, Route } from 'react-router-dom'
import Songs from './songs.tsx'
import SongPagesDetail from './components/SongPagesDetail.tsx'
import SongListWithSelector from './components/SongsList.tsx'
import Page from './components/Page.tsx'
import SongsListWithSelector from './components/SongsList.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <Page>
            <Songs />
          </Page>
        } />
        <Route path="/songs/:title" element={
          <Page>
            <SongPagesDetail />
          </Page>
        } />
        <Route path="/all-songs" element={
          <Page>
            <SongsListWithSelector />
          </Page>
        } />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>

    </>
  )
}

export default App
