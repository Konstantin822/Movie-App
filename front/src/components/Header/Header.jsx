// Import modules
import React, { useState, useEffect } from "react";

// <=============================================================>

// Header
export default function Header() {
    // Initialize state
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeTheme, setActiveTheme] = useState("dark")
    // <=============================================================>

    // Toggle buttons
    const toggleMenu = () => {
        setActiveMenu(!activeMenu);
    };

    const toggleTheme = () => {
        const theme = activeTheme === "light" ? "dark" : "light"
        setActiveTheme(theme)
        document.body.classList.toggle("light")
        document.body.classList.toggle("dark")
    }

    useEffect(() => {
        document.body.classList.add(activeTheme)
    }, [activeTheme])
    // <=============================================================>

    return (
        // Header layout
        <header>
            <div className="header__container">
                <a href="/" className="header__logo">
                    Logo
                </a>
                <nav className="header__nav">
                    <ul className={`header__nav-sidebar ${activeMenu ? 'open' : ''}`}>
                        <li onClick={toggleMenu} className="menu-toggle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="40px"
                                fill="white"
                            >
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            </svg>
                        </li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/movies">Movies</a></li>
                        <li><a href="/tvSeries">TV Series</a></li>
                    </ul>
                    <ul className="header__nav-list">
                        <li className="hide"><a href="/">Home</a></li>
                        <li className="hide"><a href="/movies">Movies</a></li>
                        <li className="hide"><a href="/tvSeries">TV Series</a></li>
                        <li onClick={toggleMenu} className="menu-toggle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="40px"
                                fill="white"
                            >
                                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                            </svg>
                        </li>
                    </ul>
                </nav>
                <div className={`header__theme ${activeTheme === "light" ? 'active' : ''}`} onClick={toggleTheme}>
                    <div className="header__theme-switch"></div>
                </div>
            </div>
        </header>
        // <=============================================================>
    );
}
// <=============================================================>