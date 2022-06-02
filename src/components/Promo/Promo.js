import React from "react";
import './Promo.css'
import promoPic from "../../images/planetLogoLanding.svg";
import NavTab from "../NavTab/NavTab";

function Promo () {
    return (
        <div className="promo">
            <div className="promo__info">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <span className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</span>
                <NavTab />
            </div>
            <img src={promoPic} alt="Логотип" className="promo__pic" />
        </div>
        )

}

export default Promo;