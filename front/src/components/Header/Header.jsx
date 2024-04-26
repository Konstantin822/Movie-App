import React from "react";

export default function Header() {
    return (
        <header>
            <div className="container header__container">
                <a href="/" className="header__logo">
                    Your logo
                </a>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="/movies">Movies</a></li>
                        <li><a href="/tvSeries">TV Series</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}