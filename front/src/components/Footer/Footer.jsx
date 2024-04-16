export default function Footer() {
    return (
        <>
            <footer>
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
                        <a className="footer__box-link footer__box-link_facebook">Facebook</a>
                        <a className="footer__box-link footer__box-link_x">X</a>
                        <a className="footer__box-link footer__box-link_instagramm">Instagramm</a>
                        <a className="footer__box-link footer__box-link_tikTok">Tik-Tok</a>
                    </div>
                </div>
            </footer>
        </>
    );
}