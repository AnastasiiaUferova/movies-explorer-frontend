import React from "react";
import './Promo.css'
import promoPic from "../../images/planetLogoLanding.svg";
import NavTab from "../NavTab/NavTab";

function Promo () {
    return (
        <div className="promo">
            <div className="promo__info">
                <h1 className="promo__title">Educational project of a student of the Web Development Faculty.</h1>
                <span className="promo__subtitle">Scroll below to learn more about this project and its creator.</span>
                <NavTab />
            </div>
            <img src={promoPic} alt="Logo" className="promo__pic" />
        </div>
        )

}

export default Promo;