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
                        <li><a href="">Home</a></li>
                        <li><a href="">Movies</a></li>
                        <li><a href="">Genre</a></li>
                    </ul>
                </nav>
                <select className="header__sel">
                    <option>--</option>
                    <option>Year</option>
                    <option>Genre</option>
                    <option>Rating</option>
                </select>

                <input className="header__inp" type="text" placeholder="Search" />
            </div>
        </header>
    );
}