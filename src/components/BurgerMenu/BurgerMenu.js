import React from "react";
import './BurgerMenu.css'
import { NavLink } from "react-router-dom";
import profile from "../../images/accIcon.svg";
import { useState } from "react";


function BurgerMenu() {

    const [isChecked, setIsChecked] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = event => {
        if (event.target.checked) {
            setOpenMenu(true)
        } else {
            setOpenMenu(false)
        }
        setIsChecked(current => !current);
    };

    const menuOpenClassName = `${openMenu ? "menu__container menu__container_opened" : "menu__container"}`;
    const menuCheckboxClassName = `${openMenu ? " menu__btn menu__btn_checked" : "menu__btn"}`

    return (
        <div className="menu">
        <div className="menu__input-container">
            <input className="menu__toggle" type="checkbox" value={isChecked} onChange={handleChange} />
            <label className={menuCheckboxClassName}>
                <span></span>
            </label>
        </div>
        <div className={menuOpenClassName}>
            <ul className="menu__box">
                <li className="menu__link-item"><NavLink to="/" className="menu__link">Main Page</NavLink></li>
                <li className="menu__link-item"><NavLink to="/movies" className="menu__link">Movies</NavLink></li>
                <li className="menu__link-item"><NavLink to="/saved-movies" className="menu__link">Saved Movies</NavLink></li>
            </ul>
            <div className="navigation__acc-container navigation__acc-container_type_menu">
                <NavLink to="/profile" className="navigation__acc">Profile</NavLink>
                <div className="navigation__pic-container">
                    <img src={profile} alt="Логотип профиля" className="navigation__pic" />
                </div>
            </div>
        </div>
    </div>
        )
}

export default BurgerMenu;


