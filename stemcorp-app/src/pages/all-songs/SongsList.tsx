import "./SongsList.css";

import SongCard from "../../components/song-card/SongCard";
import { MusicType } from "../../type/musicType";
import { useState } from 'react';
import { useMusic } from "../../context/MusicContext";

const SelectedType = {
  All: "All",
  Album: MusicType.ALBUM,
  Single: MusicType.SINGLE,
  EP: MusicType.EP
}

export type SelectedType =
  typeof SelectedType[keyof typeof SelectedType];

function SongsList({ currentType }: { currentType: SelectedType }) {
  const { loading, musics } = useMusic();

  if(loading) {
    return <div className="loading">Loading...</div>;
  }

  const filteredMusics = currentType === SelectedType.All
    ? musics
    : musics.filter(m => m.type === currentType);

  return (
    <div className="songs-grid">
      {filteredMusics.map((music) => (
        <SongCard key={music.title} song={music} />
      ))}
    </div>
  );
}

type TypeSelectorProps = {
  value: SelectedType;
  onChange: (type: SelectedType) => void;
};

function TypeSelector({ value, onChange }: TypeSelectorProps) {
  return (
    <div className="type-selector">
      <button
        className={value === SelectedType.All ? 'active' : ''}
        onClick={() => onChange(SelectedType.All)}
      >
        All
      </button>

      <button
        className={value === SelectedType.Album ? 'active' : ''}
        onClick={() => onChange(SelectedType.Album)}
      >
        Album
      </button>

      <button
        className={value === SelectedType.Single ? 'active' : ''}
        onClick={() => onChange(SelectedType.Single)}
      >
        Single
      </button>

      <button
        className={value === SelectedType.EP ? 'active' : ''}
        onClick={() => onChange(SelectedType.EP)}
      >
        EP
      </button>
    </div>
  );
}

export default function SongsListWithSelector() {
  const [currentType, setCurrentType] = useState<SelectedType>(
    SelectedType.All
  );

  return (
    <div className="songs-list-with-selector">
      <TypeSelector
        value={currentType}
        onChange={setCurrentType}
      />
      <SongsList currentType={currentType} />
    </div>
  );
}

