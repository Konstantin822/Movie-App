export default function Card({ content }) {
    return (
        <>
            {content.map(item => (
                <div className={`card ${item.active ? 'active' : undefined}`} key={content.id}>
                    <img className="card__img"
                        src={item.img}
                        alt="Image" />
                    <div className="card__info">
                        <h1 className="card__title">{item.name}</h1>
                        <div className="card__desc1">
                            <p>Rating: {item.rating}</p>
                            <p>Genre: {item.genre}</p>
                            <p>Time: {item.time}</p>
                            <p>Year: {item.year}</p>
                        </div>
                        <p className="card__desc2">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}