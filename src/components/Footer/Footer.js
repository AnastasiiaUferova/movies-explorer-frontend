import React from "react";
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
        <div className="footer__text-container">
            <p className="footer__text">Educational project for Yandex.Practicum х BeatFilm.</p>
        </div>
        <div className="footer__table">
            <p className="footer__copyright">© 2022</p>
            <div className="footer__links">
                <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Yandex.Practicum</a>
                <a className="footer__link" href="https://github.com/yandex-praktikum?tab=repositories" target="_blank" rel="noreferrer">Github</a>
                <a className="footer__link" href="https://www.facebook.com/practicum.latam" target="_blank" rel="noreferrer">Facebook</a>
            </div>
        </div>
    </footer>
        )
}

export default Footer;