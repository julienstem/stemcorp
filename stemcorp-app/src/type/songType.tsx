import type { Platforms } from "./platformsType";

export const SongType = {
    SINGLE: "Single",
    ALBUM: "Album",
    EP: "EP",
    SONG_IN_PROJECT: "Song in Project",
} as const;

export type SongType = typeof SongType[keyof typeof SongType];

export interface Song {
    title: string;
    coverUrl: string;
    type: SongType;
    platforms: Platforms;
    lyrics?: string;
    tracks?: string;
    available: boolean;
}