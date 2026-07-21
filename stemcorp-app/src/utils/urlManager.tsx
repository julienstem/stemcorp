import type { MusicType } from "../type/musicType";

export default function getSongUrl(
  title: string,
  type: MusicType,
  parentTitle?: string,
  parentType?: string,
): string {
  if (parentTitle && parentType) {
    return `/songs/${parentType.toLowerCase()}/${parentTitle.toLowerCase()}/${type.toLowerCase()}/${title.toLowerCase()}`;
  }
  return `/songs/${type.toLowerCase()}/${title.toLowerCase()}`;
}
