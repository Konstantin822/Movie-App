import React, { useState } from "react";

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false)

    const toggleMenu = () => {
        setActiveMenu(!activeMenu)
        const sidebar = document.querySelector('.header__nav-sidebar')
        if (sidebar) {
            sidebar.style.display = activeMenu ? 'none' : 'flex'
        } else {
            sidebar.style.display = 'none'
        }
    }
    return (
        <header>
            <div className="container header__container">
                <a href="/" className="header__logo">
                    Your logo
                </a>
                <nav className="header__nav">
                    <ul className="header__nav-sidebar">
                        <li onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="white"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/movies">Movies</a></li>
                        <li><a href="/tvSeries">TV Series</a></li>
                    </ul>
                    <ul className="header__nav-list">
                        <li className="header__nav-list hide"><a href="/">Home</a></li>
                        <li className="header__nav-list hide"><a href="/movies">Movies</a></li>
                        <li className="header__nav-list hide"><a href="/tvSeries">TV Series</a></li>
                        <li onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="40px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></li>
                    </ul>
                </nav>
            </div>
        </header >
    );
}