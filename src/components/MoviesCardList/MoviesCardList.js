import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList () {
    return (
        <div>
        <div className="card-list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
        </div>
        <div className="card-list__more">
            <button className="card-list__more-button">Ещё</button>
        </div>
        </div>
        )
}

export default MoviesCardList;