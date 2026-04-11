import './song.css'

type SongProps = {
    title: string;
    coverUrl: string;
};

function Song( {title, coverUrl}: SongProps) {
  const pageUrl = `/songs/${title.toLowerCase()}`;
  return (
    <div>
      <a href={pageUrl} className="song-link" title={title}>
        <img src={coverUrl} alt={title} className="song-cover"/>
      </a>
    </div>
  )
}

export default Song