import { createContext, useContext, useEffect, useState } from "react";
import { MusicType, type Music } from "../type/musicType";
import MusicLoader from "../utils/songLoader";

type MusicContextType = {
  musics: Map<MusicType, Music[]>;
  loading: boolean;
};

const MusicContext = createContext<MusicContextType | null>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [musics, setMusics] = useState<Map<MusicType, Music[]>>(
    new Map([
      [MusicType.ALBUM, []],
      [MusicType.EP, []],
      [MusicType.SINGLE, []],
    ]),
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    MusicLoader().then((data) => {
      console.log(data);
      const newMusicMap = new Map<MusicType, Music[]>(musics);
      data.forEach((music) => {
        const currentArray = newMusicMap.get(music.type) || [];
        newMusicMap.set(music.type, [...currentArray, music]);
      });
      setMusics(newMusicMap);
      setLoading(false);
    });
  }, []);

  return (
    <MusicContext.Provider value={{ musics, loading }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("useMusic must be used inside MusicProvider");
  }
  return context;
}
