import './song.css'

type SongProps = {
    title: string;
    coverUrl: string;
};

function Song( {title, coverUrl}: SongProps) {
  const pageUrl = `/songs/${title}`;
  return (
    <a href={pageUrl} className="song-link">
      <img src={coverUrl} alt={title} className="song-cover"/>
    </a>
  )
}

export default Song