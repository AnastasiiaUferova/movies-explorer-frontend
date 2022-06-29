import React from "react";
import './Header.css'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import logo from "../../images/logoLanding.svg";
import HeaderLinks from "../HeaderLinks/HeaderLinks"
import Navigation from "../Navigation/Navigation"
import BurgerMenu from "../BurgerMenu/BurgerMenu"
import { NavLink } from "react-router-dom";

function Header ({loggedIn}) {
    let location = useLocation();
    const isMain = location.pathname === "/";

    const [isSmallWidth, setIsSmallWidth] = useState(false)

    const Resize = useDebouncedCallback(
        () => {
            if (window.innerWidth <= 768) {
                setIsSmallWidth(true)
            }
            else setIsSmallWidth(false)
        }, 200
    )

    useEffect(() => {
        window.addEventListener('resize', Resize)
        return () => {
            window.removeEventListener('resize', Resize);
    } }, [Resize])
    
    const headerThemeClassName = `${isMain ? "header header_type_main" : " header header_type_other"}`;
    const headerComponents = isSmallWidth ? <BurgerMenu /> : <Navigation />;

    return (
    
        <header className={headerThemeClassName}>
            <NavLink className="profile__link" to="/"><img src={logo} alt="Логотип" className="header__logo" /></NavLink>
            {!loggedIn && (
                <HeaderLinks />
            )}
            {loggedIn && (
                headerComponents
            )}
        </header>
        )
}

export default Header;