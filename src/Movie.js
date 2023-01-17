import React from "react";
import PropTipes from "prop-types";
import './movie.css';


function Movie({title, summary, poster, year, genres}) {
    return (
        <div className="movie">
            <div className="movie__column">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
                <ul className="movie__genres">
                    {genres.map((genre, i) => {
                        return <li key={i} className="genres__genre">{genre}</li>
                    })}
                </ul>
            </div>
            <img src={poster} alt={title} />

        </div>
    )
}

Movie.propTipes = {
    id: PropTipes.number.isRequired,
    title: PropTipes.string.isRequired,
    summary: PropTipes.string.isRequired,
    poster: PropTipes.string.isRequired,
    year: PropTipes.number.isRequired,
    genres: PropTipes.arrayOf(PropTipes.string).isRequired
}

export default Movie;