import type { Platforms } from "./platformsType";

export const MusicType = {
    SINGLE: "Single",
    ALBUM: "Album",
    EP: "EP",
} as const;

export type MusicType = typeof MusicType[keyof typeof MusicType];

export interface Music {
    title: string;
    coverUrl: string;
    platforms: Platforms;
    type: MusicType;
    releaseDate: string;
    lyrics?: string;
    tracks?: string[];
    available: boolean;
}