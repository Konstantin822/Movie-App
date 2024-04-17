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
                    <a className="footer__box-link footer__box-link_facebook"><img src="/public/images/icons/facebook-f.svg" /></a>
                    <a className="footer__box-link footer__box-link_x"></a>
                    <a className="footer__box-link footer__box-link_instagramm"></a>
                    <a className="footer__box-link footer__box-link_tikTok"></a>
                </div>
            </div>
        </footer>
    );
}