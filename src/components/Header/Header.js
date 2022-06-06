import React from "react";
import './Header.css'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import logo from "../../images/logoLanding.svg";
import HeaderLinks from "../HeaderLinks/HeaderLinks"
import Navigation from "../Navigation/Navigation"
import BurgerMenu from "../BurgerMenu/BurgerMenu"

function Header () {
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

    const isMenuVisible = () => {
        const locations = ["/saved-movies", "/movies", "/profile"];
        return locations.includes(location.pathname);
    };

    return (
    
        <header className={headerThemeClassName}>
            <img src={logo} alt="Логотип" className="header__logo" />

            {location.pathname === "/"  && (
                <HeaderLinks />
            )}
            {isMenuVisible() && (
                headerComponents
            )}
        </header>
        )
}

export default Header;