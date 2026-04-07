import "./SongsList.css";

import { songsData } from "../data/songsData";
import SongCard from "./SongCard";
import { SongType } from "../type/songType";
import { useState } from 'react';

const SelectedType = {
  All: "All",
  Album: SongType.ALBUM,
  Single: SongType.SINGLE,
  EP: SongType.EP
}

export type SelectedType =
  typeof SelectedType[keyof typeof SelectedType];

function SongsList({ currentType }: { currentType: SelectedType }) {
  return (
    <div className="songs-grid">
      {songsData
        .filter(
          (song) => currentType === "All" || song.type === currentType
        )
        .map((song) => (
          <SongCard key={song.title} song={song} />
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

