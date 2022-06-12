import React from "react";
import './MoviesCard.css'
import { useLocation } from "react-router-dom";

function MoviesCard ({card}) {

    let location = useLocation();
    const isSaved = location.pathname === "/saved-movies";

    const headerThemeClassName = `${isSaved ? "card__button card__button_type_delete" : " card__button"}`;

    function convertMinutes(time){
        const hours = Math.trunc(time/60);
        const minutes = time % 60;
        return { hours, minutes}
    }

    const durationData = convertMinutes(card.duration)

    return (
        <div className="card">
            <a  className="card__pic-link" href={card.trailerLink} target="_blank" rel="noreferrer">
            <img className="card__pic" src={`https://api.nomoreparties.co/${card.image.url}`} alt="Постер 33 слова о дизайне"></img>
            </a>
            <div className="card__text-container">
                <p className="card__text">{card.nameRU}</p>
                <div className="card__button-container">
                    <button className={headerThemeClassName} />
                </div>
            </div>
            <p className="card__time">{`${durationData.hours}ч${durationData.minutes}м`} </p>
        </div>
        )
}

export default MoviesCard;