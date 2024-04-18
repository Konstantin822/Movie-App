import { useState } from "react";

export default function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false)

    const toogleBurger = () => {
        setBurgerOpen(!burgerOpen)
    }
    return (
        <header className="header">
            <div className="container header__container">
                <h1 className="header__logo">Logo</h1>
                <div className="header__navigation">
                    <div className="header__navigation_nav">
                        <div className="header__navigation_nav_burger" onClick={toogleBurger}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <nav className={burgerOpen ? "active" : ""}>
                            <a href='/'>Home</a>
                            <a href="">Genre</a>
                            <a href="">Tag</a>
                            <a href="">Movie</a>
                            <a href="">TV Series</a>
                        </nav>
                    </div>
                    <div className="header__search">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
            </div>
        </header >
    );
}