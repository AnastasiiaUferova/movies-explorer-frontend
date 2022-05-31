import React from "react";
import './Header.css'
import logo from "../../images/logoLanding.svg";

function Header () {
    return (
        <header className="header">
          <img src={logo} alt="Логотип" className="header__logo" />
          <div className="header__buttons">
            <button className="header__button">Регистрация</button>
            <button className="header__button">Войти</button>
          </div>
        </header>
        )
}

export default Header;