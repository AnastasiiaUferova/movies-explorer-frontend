import React from "react";
import './Portfolio.css';
import arrow from "../../images/arrow.svg"

function Portfolio () {
    return (
        <div className="portfolio">
        <h4 className="portfolio__title">Portfolio</h4>
        <div className="portfolio__links">
            <div className="portfolio__link-container">
                <p className="portfolio__subtitle">Static website</p>
                <a className="portfolio__link" href="https://anastasiiauferova.github.io/how-to-learn/index.html" target="_blank" rel="noreferrer">
                    <img src={arrow} alt="Arrow" className="portfolio__pic" />
                </a>
            </div>
            <div className="portfolio__link-container">
                <p className="portfolio__subtitle">Responsive website</p>
                <a className="portfolio__link" href="https://anastasiiauferova.github.io/russian-travel/" target="_blank" rel="noreferrer">
                    <img src={arrow} alt="Arrow" className="portfolio__pic" />
                </a>
            </div>
            <div className="portfolio__link-container">
                <p className="portfolio__subtitle">Single Page Application</p>
                <a className="portfolio__link" href="https://anastasiiauferova.github.io/react-mesto-auth/#/sign-in" target="_blank" rel="noreferrer">
                    <img src={arrow} alt="Arrow" className="portfolio__pic" />
                </a>
            </div>
        </div>
    </div>
        )
}

export default Portfolio;

