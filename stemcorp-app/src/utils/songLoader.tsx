import type { Music } from "../type/musicType";
import { MusicType } from "../type/musicType";


async function MusicLoader(): Promise<Music[]> {
  const musicList: Music[] = [];

  const songsDir = import.meta.glob("../assets/music/**/songs/*.flac", { eager: true, as: "url" });
  const coverDir = import.meta.glob("../assets/music/**/cover/*", { eager: true, as: "url" });
  const metadataFiles = import.meta.glob("../assets/music/**/metadata.json", { eager: true });

  const songsMap = new Map<string, string[]>();
  const coverMap = new Map<string, string>();
  const typeMap = new Map<string, MusicType>();

  for (const path in songsDir) {
    const parts = path.split("/");
    const projectName = parts[4];
    
    const name = parts.pop()?.replace('.flac', '').replace('_', '. ').trim() || 'Unknown';

    if (!songsMap.has(projectName)) {
      songsMap.set(projectName, []);
      const type = path.includes('/album/') ? MusicType.ALBUM : path.includes('/ep/') ? MusicType.EP : MusicType.SINGLE;
      typeMap.set(projectName, type);
    }
    songsMap.get(projectName)?.push(name);
  }

  for (const path in coverDir) {
    const projectName = path.split("/")[4];
    if (!coverMap.has(projectName)) {
      coverMap.set(projectName, (coverDir[path] as any).default || coverDir[path]);
    }
  }

  for (const projectName of songsMap.keys()) {
    const songs = songsMap.get(projectName) || [];
    const coverUrl = coverMap.get(projectName) || '';
    const type = typeMap.get(projectName) || MusicType.SINGLE;

    const metaPath = Object.keys(metadataFiles).find(path => path.includes(`/${projectName}/`));
    const metaContent: any = metaPath ? metadataFiles[metaPath] : {};
    
    const data = metaContent.default || metaContent;

    musicList.push({
      title: projectName,
      coverUrl,
      tracks: songs,
      type,
      platforms: data.platforms || {},
      available: true,
      releaseDate: data.releaseDate || '2000-01-01',
    });
  }
  musicList.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());

  return musicList;
}

export default MusicLoader;