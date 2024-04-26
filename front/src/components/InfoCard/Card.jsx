export default function Card({ content }) {
    return (
        <div className="card">
            <img src={content.img} />
            <div className="card-info">
                <h2>{content.name}</h2>
                <h4>Rating: {content.rating}</h4>
                <h4>Year: {content.year}</h4>
                <h4>Genre: {content.genre}</h4>
            </div>
        </div>
    )
}