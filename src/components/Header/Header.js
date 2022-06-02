import React from "react";
import './Header.css'
import { useLocation } from "react-router-dom";
import logo from "../../images/logoLanding.svg";
import HeaderLinks from "../HeaderLinks/HeaderLinks"
import Navigation from "../Navigation/Navigation"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

function Header () {
    let location = useLocation();
    const isMain = location.pathname === "/";
    const headerThemeClassName = `${isMain ? "header header_type_main" : " header header_type_other"}`;

    return (
    
        <header className={headerThemeClassName}>
            <img src={logo} alt="Логотип" className="header__logo" />

            {location.pathname === "/"  && (
                <HeaderLinks />
            )}
            {location.pathname.includes("/movies") && (
                <BurgerMenu />
            )}
            {location.pathname.includes("/saved-movies") && (
                <Navigation />
            )}
            {location.pathname.includes("/profile") && (
                <Navigation />
            )}
        </header>
        )
}

export default Header;
