import "./SongPagesDetail.css"
import { useParams } from "react-router-dom"
import { SongPagesLayout } from "./SongPagesLayout";
import type { Music } from "../../type/musicType";
import { useMusic } from "../../context/MusicContext";

export default function SongPagesDetail() {
  const { title } = useParams<{ title: string }>();

  const musicContext = useMusic();
  const song: Music | undefined = musicContext.musics.find(m => m.title.toLowerCase() === title);

  if (!song) {
    return <div className="song-not-found">Song not found</div>;
  }

  return <div className="song-pages-detail">
    <SongPagesLayout song={song} />
  </div>
}