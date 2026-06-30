import type { Platforms } from "./platformsType";

export const MusicType = {
  SINGLE: "Single",
  ALBUM: "Album",
  EP: "EP",
} as const;

export type MusicType = (typeof MusicType)[keyof typeof MusicType];

export interface Track {
  lyrics?: string;
  name: string;
}

export interface Music {
  title: string;
  coverUrl: string;
  platforms: Platforms;
  type: MusicType;
  releaseDate: string;
  tracks: Track[];
  available: boolean;
}
