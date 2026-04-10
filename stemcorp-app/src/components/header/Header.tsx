import './Header.css'
import logo_big from '../../assets/stemcorp_logo_big.png'
import { useMusic } from '../../context/MusicContext';


export default function Header() {
    const latestMusic = useMusic().musics[0];
    const lastestUrl = '/songs/' + latestMusic?.title;
    return (
        <header className="header">
            <div id='left-spacer' className='spacer'>
                <a href ={lastestUrl} className='header-link' id='LastestReleaseLink'>Dernière sortie</a>
            </div>
            <div id='center-spacer' className='spacer'>
                <a href="/" id='mainLogo'>
                    <img src={logo_big} alt="Big stemcorp logo" id='mainLogo'/>
                </a>
            </div>
            <div id='right-spacer' className='spacer'>
                <a href ="/all-songs" className='header-link' id='AllSongsLink'>Toutes les musiques</a>
            </div>
        </header>
    )
}