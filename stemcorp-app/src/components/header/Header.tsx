import './Header.css'
import logo_big from '../../assets/seraphin stemcorp.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { useMusic } from '../../context/MusicContext';


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const music = useMusic().musics;

    const latestRelease = music ? music[0] : null;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="header">
            <div id='left-spacer' className='spacer'>
                <button className="close-btn" onClick={toggleMenu}><GiHamburgerMenu className='icon'/></button>
                <div className={`side-menu ${isOpen ? "open" : ""}`}>
                    <button className="close-btn" onClick={toggleMenu}><IoMdClose /></button>

                    <nav className="side-nav">
                        <a href={`/songs/${latestRelease?.title.toLocaleLowerCase()}`} ><span className="lastest-release-link">Dernière sortie</span></a>
                        <a href="/">Accueil</a>
                        <a href="/all-songs">Tout les titres</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
            </div>
            <div id='center-spacer' className='spacer'>
                <a href="/" className="main-logo-link">
                    <img src={logo_big} alt="Big stemcorp logo" id='mainLogo'/>
                </a>
            </div>
        </header>
    )
}