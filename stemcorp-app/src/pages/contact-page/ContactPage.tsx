import './ContactPage.css'
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function ContactPage() {
    return (
        <div className="contact-page">
            <div className="contact-business contact-container">
                <h1>Business / Prod:</h1>
                <div className="contact-info">
                    <p>Email: <a href="mailto:lilstempro@gmail.com">lilstempro@gmail.com</a></p>
                </div>
            </div>
            <div className="reseaux-sociaux contact-container">
                <h1>Réseaux sociaux:</h1>
                <div className="contact-info">
                    <p><a href="https://www.instagram.com/stem_dotcom/" target="_blank" rel="noopener noreferrer"><span className="social-icon-and-text"><FaInstagramSquare />Instagram</span></a></p>
                    <p><a href="https://x.com/lil_stem" target="_blank" rel="noopener noreferrer"><span className="social-icon-and-text"><FaSquareXTwitter />X</span></a></p>
                    <p><a href="https://www.tiktok.com/@stem_dotcom?_r=1&_t=ZN-951PepPPeMw" target="_blank" rel="noopener noreferrer"><span className="social-icon-and-text"><AiFillTikTok />TikTok</span></a></p>
                </div>
            </div>
        </div>
    )
}