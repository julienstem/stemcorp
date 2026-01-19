import './Header.css'
import logo_big from './assets/stemcorp_logo_big.png'
import { songsData } from './data/songsData';


export default function Header() {
    const lastestUrl = '/songs/' + songsData[0].title;
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