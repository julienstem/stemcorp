import { useEffect, useState } from "react";
import "./songs-home-page.css";
import Song from "../../components/song/song";
import MusicLoader from "../../utils/songLoader";
import type { Music } from "../../type/musicType";

function SongsPage() {
  const [loadedSongs, setLoadedSongs] = useState<any[]>([]);

  useEffect(() => {
    MusicLoader().then((songs) => setLoadedSongs(songs));
  }, []);

  return (
    <div className="songs-list">
      {loadedSongs.map((song: Music) => (
        <Song
          key={song.title}
          title={song.title}
          coverUrl={song.coverUrl}
          type={song.type}
        />
      ))}
    </div>
  );
}

export default SongsPage;
