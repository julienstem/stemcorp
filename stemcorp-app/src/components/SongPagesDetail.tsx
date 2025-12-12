import "./SongPagesDetail.css"
import { useParams } from "react-router-dom"
import { songsData } from "../data/songsData";
import { SongPagesLayout } from "./SongPagesLayout";

export default function SongPagesDetail() {
  const { title } = useParams<{ title: string }>();

  const song = songsData.find((s) => s.title === title);

  if (!song) {
    return <div>Song not found</div>;
  }
  return (
    <SongPagesLayout song={song}/>
  );
}