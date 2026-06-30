import type { MusicType } from "../../type/musicType";
import getSongUrl from "../../utils/urlManager";
import "./song.css";

type SongProps = {
  title: string;
  coverUrl: string;
  type: MusicType;
};

function Song({ title, coverUrl, type }: SongProps) {
  const pageUrl = getSongUrl(title, type);
  return (
    <div>
      <a href={pageUrl} className="song-link" title={title}>
        <img src={coverUrl} alt={title} className="song-cover" />
      </a>
    </div>
  );
}

export default Song;
