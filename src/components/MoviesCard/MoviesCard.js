import React from "react";
import './MoviesCard.css'
import card from "../../images/MoviePic.png"

function MoviesCard () {
    return (
        <div className="card">
            <img className="card__pic" src={card} alt="Постер 33 слова о дизайне"></img>
            <div className="card__text-container">
                <p className="card__text">33 слова о дизайне</p>
                <div className="card__button-container">
                    <button className="card__button" />
                </div>
            </div>
            <p className="card__time">1ч42м</p>
        </div>
        )

}

export default MoviesCard;