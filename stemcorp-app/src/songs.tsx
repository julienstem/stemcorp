import './songs.css';
import Song from './song';
import SongsData from './songs.json';

type SongData = {
  title: string;
  imageUrl: string;
  type: string;
};

function SongsList() {
  const songs: SongData[] = SongsData.songs;

  return (
    <div className="songs-list">
      {songs.map((song) => (
        <Song
          key={song.title}
          coverUrl={song.imageUrl}
          title={song.title}
          type={song.type}
        />
      ))}
    </div>
  );
}

export default SongsList;
