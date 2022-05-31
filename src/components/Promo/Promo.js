import React from "react";
import './Promo.css'
import promoPic from "../../images/planetLogoLanding.svg";

function Promo () {
    return (
        <div className="promo">
            <div className="promo__info">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <span className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</span>
                <div className="promo__link-container">
                <a href="#about-project" className="promo__link">Узнать больше</a>
                </div>
            </div>
            <img src={promoPic} alt="Логотип" className="promo__pic" />
        </div>
        )

}

export default Promo;