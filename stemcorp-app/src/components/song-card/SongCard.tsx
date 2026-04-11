import "./SongCard.css"

function SongCard({
  song,
}: {
  song: { title: string; coverUrl: string }
}) {
  return (
    <a
      href={`/songs/${encodeURIComponent(song.title.toLowerCase())}`}
      className="song-card"
    >
      <div className="song-cover-wrapper">
        <img
          src={song.coverUrl}
          alt={song.title}
          className="song-cover"
        />
      </div>

      <div className="song-info">
        <h3 className="song-title">{song.title}</h3>
      </div>
    </a>
  )
}

export default SongCard
