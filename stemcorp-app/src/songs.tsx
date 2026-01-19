import './songs.css';
import Song from './song';
import { songsData } from './data/songsData';

function SongsList() {

  return (
    <div className="songs-list">
      {songsData.map((song) => {
        if(song.available){
          return <Song title={song.title} coverUrl={song.coverUrl} />;
        }
        return null;
      })}
    </div>
  );
}

export default SongsList;
