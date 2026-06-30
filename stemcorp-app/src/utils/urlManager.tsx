import type { MusicType } from "../type/musicType";

export default function getSongUrl(
  title: string,
  type: MusicType,
  parentTitle?: string,
  parentType?: string,
): string {
  if (parentTitle && parentType) {
    return `/stemcorp/songs/${parentType.toLowerCase()}/${parentTitle.toLowerCase()}/${type.toLowerCase()}/${title.toLowerCase()}`;
  }
  return `/stemcorp/songs/${type.toLowerCase()}/${title.toLowerCase()}`;
}
