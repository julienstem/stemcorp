import { Routes, Route } from "react-router-dom";
import SongsPage from "./pages/songs-home-page/songs-home-page";
import SongPagesDetail from "./pages/song-pages/SongPagesDetail";
import SongsListWithSelector from "./pages/all-songs/SongsList";
import ContactPage from "./pages/contact-page/ContactPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SongsPage />} />
      <Route
        path="/songs/:parentType?/:parentTitle?/:type/:title"
        element={<SongPagesDetail />}
      />
      <Route path="/all-songs" element={<SongsListWithSelector />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<SongsPage />} />
    </Routes>
  );
}
