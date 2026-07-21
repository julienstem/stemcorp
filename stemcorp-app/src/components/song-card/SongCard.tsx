import { Link } from "react-router-dom";
import "./SongCard.css";
import type { Music } from "../../type/musicType";
import getSongUrl from "../../utils/urlManager";

interface SongCardProps {
  song: Music;
}

function SongCard({ song }: SongCardProps) {
  return (
    <Link to={getSongUrl(song.title, song.type)} className="song-card">
      <div className="song-cover-wrapper">
        <img src={song.coverUrl} alt={song.title} className="song-cover" />
      </div>

      <div className="song-info">
        <h3 className="song-title">{song.title}</h3>
      </div>
    </Link>
  );
}

export default SongCard;
