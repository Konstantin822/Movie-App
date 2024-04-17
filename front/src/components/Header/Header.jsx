import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <img src="" alt="logo" />
                </div>
                <nav className="header__navigation">
                    <ul className="header__navigation-list">
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
                    <FontAwesomeIcon className="header__account-icon" icon={faMagnifyingGlass} />
                    <FontAwesomeIcon className="header__account-icon" icon={faBell} />
                    <FontAwesomeIcon className="header__account-icon" icon={faUser} />
                    <button>Subscribe</button>
                </div>
            </div>
        </header >
    );
}