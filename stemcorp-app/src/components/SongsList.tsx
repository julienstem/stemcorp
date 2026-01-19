import "./SongsList.css";

import { songsData } from "../data/songsData";
import SongCard from "./SongCard";

export default function SongsList() {
  return (
    <div className="songs-list">
      {songsData.map((song) => (
        <div key={song.title} className="song-item">
          <SongCard song={song} />
        </div>
      ))}
    </div>
  );
}