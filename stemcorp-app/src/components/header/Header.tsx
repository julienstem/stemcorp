import "./Header.css";
import logo_big from "../../assets/seraphin stemcorp.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useMusic } from "../../context/MusicContext";
import { MusicType } from "../../type/musicType";
import getSongUrl from "../../utils/urlManager";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const music = useMusic().musics;

  const findLatestRelease = () => {
    if (!music) return null;

    const latestAlbum = music.get(MusicType.ALBUM)?.[0];
    const latestEp = music.get(MusicType.EP)?.[0];
    const latestSingle = music.get(MusicType.SINGLE)?.[0];

    const releases = [latestAlbum, latestEp, latestSingle].filter(Boolean);

    if (releases.length === 0) {
      return null;
    }

    return releases.sort((a, b) => {
      const dateB = b?.releaseDate ? new Date(b.releaseDate).getTime() : 0;
      const dateA = a?.releaseDate ? new Date(a.releaseDate).getTime() : 0;

      return dateB - dateA;
    })[0];
  };

  const latestRelease = findLatestRelease();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div id="left-spacer" className="spacer">
        <button className="close-btn" onClick={toggleMenu}>
          <GiHamburgerMenu className="icon" />
        </button>
        <div className={`side-menu ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={toggleMenu}>
            <IoMdClose />
          </button>

          <nav className="side-nav">
            <a
              href={getSongUrl(
                latestRelease?.title || "",
                latestRelease?.type || MusicType.ALBUM,
              )}
            >
              <span className="lastest-release-link">Dernière sortie</span>
            </a>
            <a href="/">Accueil</a>
            <a href="/all-songs">Tous les titres</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </div>
      <div id="center-spacer" className="spacer">
        <a href="/" className="main-logo-link">
          <img src={logo_big} alt="Big stemcorp logo" id="mainLogo" />
        </a>
      </div>
      <div id="right-spacer" className="spacer"></div>
    </header>
  );
}
