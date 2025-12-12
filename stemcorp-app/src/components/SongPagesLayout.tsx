import "./SongPagesLayout.css";
import React, { type JSX } from "react";
import type {Song} from "../type/songType";

interface SongPagesLayoutProps {
    song: Song;
}

export const SongPagesLayout: React.FC<SongPagesLayoutProps> = ({song}) => {
    return (
        <div className="song-pages-layout">
            <div className="main-data">
                <div className="song-info">
                    <img src={song.coverUrl} alt={`${song.title} cover`} className="cover-image" />
                    <div className="song-details">
                        <div className="song-text-info">
                            <h1 className="song-title">{song.title}</h1>
                            <p className="song-type">{song.type}</p>
                        </div>
                    </div>
                </div>
                <div className="platforms">
                    {Object.entries(song.platforms).map(([platform, url]) => (
                        <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="platform-link">
                            <img src={`/distro_logo/${platform}.png`} alt={platform} className="platform-icon" />
                        </a>
                    ))}
                </div>
            </div>
            <div className="bottom-section">
                {renderBottomSection(song)}
            </div>
        </div>
    );
}

interface LyricsDivProps {
    lyrics: string;
}

interface TrackListDivProps {
    tracks: string;
}

const LyricsDiv: React.FC<LyricsDivProps> = ({ lyrics }) => {
    return (
        <div>
            <h2>Lyrics</h2>
            <pre className="lyrics">{lyrics}</pre>
        </div>
    );
};

const TrackListDiv: React.FC<TrackListDivProps> = ({ tracks }) => {
    return (
        <div>
            <h2>Track List</h2>
            <pre className="tacklist">{tracks}</pre>
        </div>
    );
}

const renderBottomSection = (song: Song): JSX.Element | null => {
    if (song.type === "Album") {
        const albumSong = song as Song & { tracks: string[] };
        return <TrackListDiv tracks={albumSong.tracks} />;
    } else if (song.lyrics) {
        return <LyricsDiv lyrics={song.lyrics} />;
    }
    return null;
}