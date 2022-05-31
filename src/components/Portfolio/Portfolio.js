import React from "react";
import './Portfolio.css';
import arrow from "../../images/arrow.svg"

function Portfolio () {
    return (
        <div className="portfolio">
<h4 className="portfolio__title">Портфолио</h4>
<div className="portfolio__links">
    <div className="portfolio__link-container">
        <p className="portfolio__subtitle">Статичный сайт</p>
        <a className="portfolio__link" href="https://anastasiiauferova.github.io/how-to-learn/index.html" target="_blank" rel="noreferrer">
            <img src={arrow} alt="Стрела" className="portfolio__pic"/>
        </a>
    </div>
    <div className="portfolio__link-container">
        <p className="portfolio__subtitle">Адаптивный сайт</p>
        <a className="portfolio__link" href="https://anastasiiauferova.github.io/russian-travel/" target="_blank" rel="noreferrer">
            <img src={arrow} alt="Стрела" className="portfolio__pic"/>
        </a>
    </div>
    <div className="portfolio__link-container">
        <p className="portfolio__subtitle">Одностраничное приложение</p>
        <a className="portfolio__link" href="https://mesto-front.u.nomoredomains.xyz/signin" target="_blank" rel="noreferrer">
            <img src={arrow} alt="Стрела" className="portfolio__pic"/>
        </a>
    </div>
</div>
</div>
        )
}

export default Portfolio;

