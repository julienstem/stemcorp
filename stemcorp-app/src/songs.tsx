import './songs.css';
import Song from './song';
import { songsData } from './data/songsData';

function SongsList() {

  return (
    <div className="songs-list">
      {songsData.map((song) => (
        <Song
          key={song.title}
          coverUrl={song.coverUrl}
          title={song.title}
        />
      ))}
    </div>
  );
}

export default SongsList;
