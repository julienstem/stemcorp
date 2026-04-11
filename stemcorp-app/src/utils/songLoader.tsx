import type { Music } from "../type/musicType";
import { MusicType } from "../type/musicType";


async function MusicLoader(): Promise<Music[]> {
  const musicList: Music[] = [];

  const songsDir = import.meta.glob("../assets/music/**/songs/*.flac", { eager: true });
  const coverDir = import.meta.glob("../assets/music/**/cover/*", { eager: true });
  const metadataDir = import.meta.glob("../assets/music/**/metadata.json", { eager: true });

  const songsMap = new Map<string, string[]>();
  const coverMap = new Map<string, string[]>();
  const metadataMap = new Map<string, any>();
  const typeMap = new Map<string, MusicType>();

  for (const path in songsDir) {
    const name = path.split("/").pop()?.replace('.flac', '').replace('_', '. ').trim() || 'Unknown';
    const projectName = path.split("/")[4];
    if (!songsMap.has(projectName)) {
      songsMap.set(projectName, []);
      const type = path.includes('/album/') ? MusicType.ALBUM : path.includes('/ep/') ? MusicType.EP : MusicType.SINGLE;
      typeMap.set(projectName, type);
    }
    songsMap.get(projectName)?.push(name);
  }

  for (const path in coverDir) {
    const coverUrl = new URL(path, import.meta.url).href;
    const projectName = path.split("/")[4];
    if (!coverMap.has(projectName)) {
      coverMap.set(projectName, []);
    }
    coverMap.get(projectName)?.push(coverUrl);
  }

  for (const path in metadataDir) {
    const projectName = path.split("/")[4];
    metadataMap.set(projectName, path);
  }

  for(let i: number = 0; i < songsMap.size; i++) {
    const projectName = Array.from(songsMap.keys())[i];
    const songs = songsMap.get(projectName) || [];
    const coverUrl = coverMap.get(projectName)?.[0] || '';
    const metadataPath = metadataMap.get(projectName);
    const type = typeMap.get(projectName) || MusicType.SINGLE;
    
    const platform = metadataPath ? (await import(metadataPath)).default.platforms : {};
    const releaseDate = metadataPath ? (await import(metadataPath)).default.releaseDate : '';
    musicList.push({
      title: projectName,
      coverUrl,
      tracks: songs,
      type,
      platforms: platform,
      available: true,
      releaseDate,
    });
  }

  console.log("Loaded music:", musicList);

  musicList.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
  for (const music of musicList) {
    if(music.type != MusicType.SINGLE){
      music.tracks = music.tracks?.sort((a, b) => {
        const trackA = parseInt(a.split(". ")[0]);
        const trackB = parseInt(b.split(". ")[0]);
        return trackA - trackB;
      });
    }
  }

  return musicList;
}

export default MusicLoader;