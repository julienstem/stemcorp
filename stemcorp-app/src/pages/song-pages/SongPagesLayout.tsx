import "./SongPagesLayout.css";
import React, { type JSX } from "react";
import { MusicType, type Music } from "../../type/musicType";
import { FaSpotify } from "react-icons/fa";
import { BsAppleMusic } from "react-icons/bs";
import { FaDeezer } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { FaSoundcloud } from "react-icons/fa";
import getSongUrl from "../../utils/urlManager";
import { formatTrackName } from "../../utils/formatter";

interface SongPagesLayoutProps {
  song: Music;
}

export const SongPagesLayout: React.FC<SongPagesLayoutProps> = ({ song }) => {
  const platformIcons: { [key: string]: JSX.Element } = {
    spotify: <FaSpotify className="platform-icon" />,
    applemusic: <BsAppleMusic className="platform-icon" />,
    deezer: <FaDeezer className="platform-icon" />,
    youtube: <SiYoutubemusic className="platform-icon" />,
    soundcloud: <FaSoundcloud className="platform-icon" />,
  };
  return (
    <div className="song-pages-layout">
      <div className="main-data">
        <div className="song-info">
          <img
            src={song.coverUrl}
            alt={`${song.title} cover`}
            className="cover-image"
          />
          <div className="song-details">
            <div className="song-text-info">
              <h1 className="song-title">{song.title}</h1>
              <p className="song-type">{song.type}</p>
            </div>
          </div>
        </div>
        <div className="platforms">
          {Object.entries(song.platforms).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-link"
            >
              {platformIcons[platform.toLowerCase()] || platform}
            </a>
          ))}
        </div>
      </div>
      <div className="bottom-section">{renderBottomSection(song)}</div>
    </div>
  );
};

interface LyricsDivProps {
  lyrics: string;
}

interface TrackListDivProps {
  parent: Music;
}

const LyricsDiv: React.FC<LyricsDivProps> = ({ lyrics }) => {
  return (
    <div className="lyrics-container">
      <h2>Lyrics</h2>
      <pre className="lyrics">{lyrics}</pre>
    </div>
  );
};

const TrackListDiv: React.FC<TrackListDivProps> = ({ parent }) => {
  const tracks = parent.tracks.map((track) => {
    return track.name;
  });
  return (
    <div className="track-list-container">
      <h2>Track List</h2>
      <div className="track-list">
        {tracks.map((track, index) => {
          track = formatTrackName(track);
          return (
            <a
              href={getSongUrl(
                track,
                MusicType.SINGLE,
                parent.title,
                parent.type,
              )}
              key={index}
              className="track"
            >
              {track}
            </a>
          );
        })}
      </div>
    </div>
  );
};

const renderBottomSection = (song: Music): JSX.Element | null => {
  if (song.type !== "Single") {
    return <TrackListDiv parent={song} />;
  } else if (song.tracks[0].lyrics) {
    return <LyricsDiv lyrics={song.tracks[0].lyrics} />;
  } else {
    return <p className="no-lyrics">Pas de paroles disponibles.</p>;
  }
  return null;
};
