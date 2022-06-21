import React from "react";
import './Form.css';
import logo from "../../images/logoLanding.svg";
import { NavLink, useLocation } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage"


function Form(props) {


    const NameInput = () => {
        return (
        <div className="form__item-text-container">
            <p className="form__item-text">Имя</p>
            <input onChange={props.handleChange} value={props.name} id="input_name" type="name" name="name" className="form__item-input" required />
            <ErrorMessage />
        </div>
        )
    }

    let location = useLocation();
    const buttonClassName = `${location.pathname.includes("/signup") ? "form__button" : "form__button form__button_signin"}`;

    return (
        <form className="form" onSubmit={props.handleSubmit}>
        <img src={logo} alt="Логотип" className="form__logo" />
        <h1 className="form__title">{props.title}</h1>
    
        {location.pathname === "/signup" && NameInput()
        
        }
        <p className="form__item-text">E-mail</p>
        <input onChange={props.handleChange} id="input_email" type="email" name="email" className="form__item-input" value={props.email} required />
        <ErrorMessage />
        <p className="form__item-text">Пароль</p>
        <input onChange={props.handleChange} value={props.password} id="input_password" type="password" name="password" className="form__item-input" required />
        <ErrorMessage />
        <button className={buttonClassName} type="submit">{props.button}</button>
        <div className="form__link-container">
            <p className="form__link-text">{props.text}</p>
            {location.pathname.includes("/signup") && (
            <NavLink className="form__link " to="/signin">Войти</NavLink>
            )} {location.pathname.includes("/signin") && (
            <NavLink className="form__link" to="/signup">Регистрация</NavLink>
            )}
        </div>
    </form>
        )
}

export default Form;

