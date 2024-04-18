
export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="container hero__container">
                    <div className="hero__card">
                        <h1 className="hero__card_title">Love, Death, Robots</h1>
                        <div className="hero__card_info">
                            <div className="hero__card_info-desc1">
                                <p>Rating</p>
                                <p>Date</p>
                                <p>Time</p>
                                <p>Genre</p>
                            </div>
                            <div className="hero__card_info-desc2">
                                <p>Tags<span></span></p>
                                <p>Starring<span></span></p>
                            </div>
                            <p className="hero__card_info-desc3">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="hero__card_buttons">
                            <button className="hero__card_buttons-btn">Watch trailer</button>
                            <button className="hero__card_buttons-btn">Watch now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cards">
                <div className="container cards__container">
                    {/* Тут слайдер */}
                    <div className="cards__card">
                        <img src="" alt="card" />
                    </div>
                    <div className="cards__card">
                        <img src="" alt="card" />
                    </div>
                    <div className="cards__card">
                        <img src="" alt="card" />
                    </div>
                    <div className="cards__card">
                        <img src="" alt="card" />
                    </div>
                    <div className="cards__card">
                        <img src="" alt="card" />
                    </div>
                    <div className="cards__card">
                        <img src="" alt="card" />
                    </div>
                    <div className="cards__card">
                        <img src="" alt="card" />
                    </div>
                    <div className="cards__card">
                        <img src="" alt="card" />
                    </div>
                </div>
            </section>
        </>
    );

}