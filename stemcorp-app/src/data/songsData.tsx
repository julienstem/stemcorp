import type { Song } from "../type/songType";
import { SongType } from "../type/songType";


export const songsData: Song[] = [
    {
        title: "BAG",
        coverUrl: "/covers/bag.jpg",
        type: SongType.SINGLE,
        platforms: {
            spotify: "https://open.spotify.com/intl-fr/album/3DERMVUIEw0dSkV6gMSVuR?si=LL0LeeKNTb6jBLJSTqHjrA",
            appleMusic: "https://music.apple.com/fr/album/bag-single/1852734127",
            deezer: "https://www.deezer.com/fr/album/852890222",
            soundcloud: "https://soundcloud.com/user-146029035/bag",
            youtube: "https://www.youtube.com/watch?v=gBD0YUW_4NQ",
        },
        lyrics: await readLyrics("bag.txt"),
        available: true,
    },
    {
        title: "Stemcorp",
        coverUrl: "/covers/stemcorp.jpg",
        type: SongType.ALBUM,
        platforms: {
            spotify: "https://open.spotify.com/album/1QZLzHZ6lOy8qINnsrARnD",
            appleMusic: "https://music.apple.com/fr/album/stemcorp/1755878764",
            deezer: "https://www.deezer.com/fr/album/611660222",
            soundcloud: "https://soundcloud.com/user-146029035/stemcorp",
            youtube: "https://youtu.be/ly0ttXypX2c?si=cA7woaWH3ewrlKdH",
        },
        tracks: await readTracklist("stemcorp.txt"),
        available: true,
    }
]

async function readLyrics(filename: string): Promise<string> {
  const res = await fetch(`/lyrics/${filename}`);
  if (!res.ok) throw new Error("Could not load lyrics");
  return await res.text();
}

async function readTracklist(filename: string): Promise<string> {
  const res = await fetch(`/tracklists/${filename}`);
  if (!res.ok) throw new Error("Could not load lyrics");
  return await res.text();
}

