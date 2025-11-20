import './song.css'

type SongProps = {
    title: string;
    coverUrl: string;
    type: string;
};

function Song( {title, coverUrl, type}: SongProps) {
  return (
    <img src={coverUrl} alt={title} className="song-cover" id={type}/>
  )
}

export default Song