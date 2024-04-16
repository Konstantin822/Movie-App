import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <>
            <header>
                <div className="container header__container">
                    <nav className="header__nav">
                        <div className="header__logo">
                            <img src="" alt="logo" />
                        </div>

                        <ul className="header__nav-list">
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/'>Series</a>
                            </li>
                            <li>
                                <a href='/'>Movies</a>
                            </li>
                            <li>
                                <a href='/'>Pages</a>
                            </li>
                            <li>
                                <a href='/'>Pricing</a>
                            </li>
                            <li>
                                <a href='/'>Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__account">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faBell} />
                        <FontAwesomeIcon icon={faUser} />
                        <button>Subscribe</button>
                    </div>
                </div>
            </header>
        </>
    );
}