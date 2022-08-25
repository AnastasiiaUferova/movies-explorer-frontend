import React from "react";
import './Navigation.css'
import { NavLink } from "react-router-dom";
import profile from "../../images/accIcon.svg";

function Navigation () {
    return (
    <div className="navigation">
        <div className="navigation__films-container">
            <NavLink to="/movies" className="navigation__film">Movies</NavLink>
            <NavLink to="/saved-movies" className="navigation__film">Saved movies</NavLink>
        </div>
        <div className="navigation__acc-container">
            <NavLink to="/profile" className="navigation__acc">Profile</NavLink>
            <div className="navigation__pic-container">
                <img src={profile} alt="Логотип профиля" className="navigation__pic" />
            </div>
        </div>
    </div>
        )
}

export default Navigation;