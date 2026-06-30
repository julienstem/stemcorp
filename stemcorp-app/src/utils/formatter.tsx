export function formatTrackName(trackName: string): string {
  return trackName.split("_").splice(1).join(" ");
}
