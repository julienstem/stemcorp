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

  // Remplace par les chemins de tes fichiers statiques (ex: situés dans /public)
  const filesToZip = [
    {
      url: music.coverUrl,
      name: music.coverUrl.split("/").pop() || "cover.png",
    },
  ];
  music.tracks.forEach((track: Track) => {
    filesToZip.push({
      url: `/src/assets/music/${music.type.toLowerCase()}/${music.title}/songs/${track.name}.flac`,
      name: `${track.name}.flac`,
    });
  });
  console.log(filesToZip);

  const handleDownload = async () => {
    setLoading(true);
    const zip = new JSZip();

    try {
      // 1. Récupération de chaque fichier via fetch
      const fetchPromises = filesToZip.map(async (file) => {
        const response = await fetch(file.url);
        if (!response.ok)
          throw new Error(`Erreur lors de la récupération de ${file.name}`);
        const blob = await response.blob();
        // Ajout du fichier dans le zip
        zip.file(file.name, blob);
      });

      await Promise.all(fetchPromises);

      // 2. Génération du fichier zip (Blob)
      const content = await zip.generateAsync({ type: "blob" });

      // 3. Déclenchement du téléchargement
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
