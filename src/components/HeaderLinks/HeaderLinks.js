import React from "react";
import "./HeaderLinks.css";
import { NavLink } from "react-router-dom";

function HeaderLinks() {
    return (
        <div className="header-links">
            <div className="header-links__container">
                <NavLink to="/signup" className="header-links__item">
                Register
                </NavLink>
            </div>
            <div className="header-links__container">
                <NavLink to="/signin" className="header-links__item">
                Login
                </NavLink>
            </div>
        </div>
        );
}

export default HeaderLinks;
