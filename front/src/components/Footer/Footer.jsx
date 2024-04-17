import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__box">
                    <ul className="footer__box-list">
                        <li>Terms of Use</li>
                        <li>Privacy-Policy</li>
                        <li>Blog</li>
                        <li>FAQ</li>
                        <li>Watch List</li>
                    </ul>
                    <p>All rights blah-blah...</p>
                </div>
                <div className="footer__box">
                    <h3>Follow Us</h3>
                    <a className="footer__box-link footer__box-link_facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a className="footer__box-link footer__box-link_x"><FontAwesomeIcon icon={faXTwitter} /></a>
                    <a className="footer__box-link footer__box-link_instagramm"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className="footer__box-link footer__box-link_tikTok"><FontAwesomeIcon icon={faTiktok} /></a>
                </div>
            </div>
        </footer>
    );
}