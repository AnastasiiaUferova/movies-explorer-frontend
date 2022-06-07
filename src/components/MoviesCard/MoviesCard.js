import React from "react";
import './MoviesCard.css'
import card from "../../images/MoviePic.png"
import { useLocation } from "react-router-dom";

function MoviesCard () {

    let location = useLocation();
    const isSaved = location.pathname === "/saved-movies";

    const headerThemeClassName = `${isSaved ? "card__button card__button_type_delete" : " card__button"}`;

    return (
        <div className="card">
            <img className="card__pic" src={card} alt="Постер 33 слова о дизайне"></img>
            <div className="card__text-container">
                <p className="card__text">33 слова о дизайне</p>
                <div className="card__button-container">
                    <button className={headerThemeClassName} />
                </div>
            </div>
            <p className="card__time">1ч42м</p>
        </div>
        )
}

export default MoviesCard;