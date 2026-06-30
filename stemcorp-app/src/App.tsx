import "./App.css";
import { Routes, Route } from "react-router-dom";
import SongsPage from "./pages/songs-home-page/songs-home-page.tsx";
import SongPagesDetail from "./pages/song-pages/SongPagesDetail.tsx";
import SongsListWithSelector from "./pages/all-songs/SongsList.tsx";
import Header from "./components/header/Header.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import ContactPage from "./pages/contact-page/ContactPage.tsx";

function App() {
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path="/stemcorp/" element={<SongsPage />} />
          <Route
            path="/stemcorp/songs/:parentType?/:parentTitle?/:type/:title"
            element={<SongPagesDetail />}
          />
          <Route
            path="/stemcorp/all-songs"
            element={<SongsListWithSelector />}
          />
          <Route path="/stemcorp/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
