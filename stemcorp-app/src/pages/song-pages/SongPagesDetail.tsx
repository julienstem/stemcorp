import "./SongPagesDetail.css";
import { useParams } from "react-router-dom";
import { SongPagesLayout } from "./SongPagesLayout";
import { MusicType, type Music } from "../../type/musicType";
import { useMusic } from "../../context/MusicContext";
import { formatTrackName } from "../../utils/formatter";

export default function SongPagesDetail() {
  const { parentType, parentTitle, type, title } = useParams<{
    parentType: string;
    parentTitle: string;
    type: string;
    title: string;
  }>();

  const songNotFound = () => {
    return (
      <div className="song-not-found">
        <h1>Song not found</h1>
      </div>
    );
  };

  const getMusicType = (type: string) => {
    switch (type) {
      case MusicType.ALBUM.toLowerCase():
        return MusicType.ALBUM;
      case MusicType.EP.toLowerCase():
        return MusicType.EP;
      case MusicType.SINGLE.toLowerCase():
        return MusicType.SINGLE;
      default:
        throw "Type incorecte : " + type;
    }
  };

  if (!type) {
    console.error("Type not found");
    return songNotFound();
  }

  const musicContext = useMusic();
  let song: Music | undefined = undefined;
  if (!parentTitle || !parentType) {
    song = musicContext.musics.get(getMusicType(type))?.find((m) => {
      return m.title.toLowerCase() === title?.toLowerCase();
    });
  } else {
    const parent = musicContext.musics
      .get(getMusicType(parentType))
      ?.find((m) => {
        return m.title.toLowerCase() === parentTitle?.toLowerCase();
      });
    if (!parent) {
      return songNotFound();
    }
    const track = parent?.tracks.find((m) => {
      return formatTrackName(m.name).toLowerCase() === title?.toLowerCase();
    });
    if (track) {
      song = {
        title: formatTrackName(track.name),
        coverUrl: parent.coverUrl,
        platforms: parent.platforms,
        type: MusicType.SINGLE,
        releaseDate: parent.releaseDate,
        tracks: [track],
        available: parent.available,
      };
    }
  }

  if (!song) {
    console.error("Song not found");
    return songNotFound();
  }

  return (
    <div className="song-pages-detail">
      <SongPagesLayout song={song} />
    </div>
  );
}
