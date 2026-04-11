import { createContext, useContext, useEffect, useState } from "react";
import type { Music } from "../type/musicType";
import MusicLoader from "../utils/songLoader";

type MusicContextType = {
  musics: Music[];
  loading: boolean;
};

const MusicContext = createContext<MusicContextType | null>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [musics, setMusics] = useState<Music[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    MusicLoader().then((data) => {
      setMusics(data);
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