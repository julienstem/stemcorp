import './Header.css'
import logo_big from './assets/stemcorp_logo_big.png'

export default function Header() {
    return (
        <header className="header">
            <a href="/" id='mainLogo'>
                <img src={logo_big} alt="Big stemcorp logo" id='mainLogo'/>
            </a>
        </header>
    )
}