import "./SongsList.css";

import { songsData } from "../data/songsData";
import SongCard from "./SongCard";

export default function SongsList() {
  return (
    <div className="songs-grid">
      {songsData.map((song) => (
        <SongCard key={song.title} song={song} />
      ))}
    </div>
  );
}
