import React from "react";
import './MoviesCard.css'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviesCard ({card, onCardClick, isSaved, isLiked}) {

    let location = useLocation();
    const inSavedList = location.pathname === "/saved-movies";
   // const [isLiked, setIsLiked] = useState(false);


    /*const isSaved = JSON.parse(localStorage.getItem('saved-movies')).some(
        (i) => i.movieId === card.movieId
    );*/

    const cardClassName = () => {

        if (inSavedList) {
            return `card__button card__button_type_delete`
        }

        if (isSaved) {
            return `card__button card__button_type_saved`
        }
        return `card__button`
    }


    function convertMinutes(time){
        const hours = Math.trunc(time/60);
        const minutes = time % 60;
        return { hours, minutes}
    }

    function handleClick() {

        onCardClick(card)
    }

    const imageOptions = () => {
        if (location.pathname === "/movies") {
            return `https://api.nomoreparties.co${card.image.url}`
        }
    
        if(location.pathname === "/saved-movies") {
            return `${card.image}`
        }
    }

    const durationData = convertMinutes(card.duration)

    return (
        <div className="card">
            <a  className="card__pic-link" href={card.trailerLink} target="_blank" rel="noreferrer">
            <img className="card__pic" src={imageOptions()} alt={`Постер к фильму "${card.nameRU}"`}></img>
            </a>
            <div className="card__text-container">
                <p className="card__text">{card.nameRU}</p>
                <div className="card__button-container">
                    <button onClick={handleClick} className={cardClassName()} />
                </div>
            </div>
            <p className="card__time">{`${durationData.hours}ч${durationData.minutes}м`} </p>
        </div>
        )
}

export default MoviesCard;