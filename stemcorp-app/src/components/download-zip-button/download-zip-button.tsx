import { useState, type ReactNode } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import type { Music, Track } from "../../type/musicType";
import "./download-zip-button.css";

interface DownloadZipButtonProps {
  music: Music;
  children: ReactNode;
}

export default function DownloadZipButton({
  music,
  children,
}: DownloadZipButtonProps) {
  const [loading, setLoading] = useState(false);
  const filesToZip = [
    {
      url: music.coverUrl,
      name: music.coverUrl.split("/").pop() || "cover.png",
    },
  ];
  music.tracks.forEach((track: Track) => {
    filesToZip.push({
      url: track.fileUrl,
      name: track.name + ".flac",
    });
  });
  console.log(filesToZip);

  const handleDownload = async () => {
    setLoading(true);
    const zip = new JSZip();

    try {
      const fetchPromises = filesToZip.map(async (file) => {
        const response = await fetch(file.url);
        if (!response.ok)
          throw new Error(`Erreur lors de la récupération de ${file.name}`);
        const blob = await response.blob();
        zip.file(file.name, blob);
      });

      await Promise.all(fetchPromises);

      const content = await zip.generateAsync({ type: "blob" });

      saveAs(content, "stemcorp.zip");
    } catch (error) {
      console.error("Erreur lors de la création du ZIP :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="download-zip-button"
      onClick={handleDownload}
      disabled={loading}
    >
      {children}
    </button>
  );
}
