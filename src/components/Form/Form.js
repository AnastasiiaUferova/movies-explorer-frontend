import React from "react";
import './Form.css';
import logo from "../../images/logoLanding.svg";
import { NavLink, useLocation } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import validate from "../../utils/FormValidationRules";
import useForm from "../../hooks/useForm";


function Form({handleSubmitRegister, title, text, button, handleSubmitLogin}) {

    let location = useLocation();

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        resetForm, 
        isValid, 

    } = useForm(onSubmit, validate);

    function onSubmit () {


        if (location.pathname === "/signin") {

            handleSubmitLogin(values.password, values.email)
            .catch((err) =>  {
                console.log(err)
                resetForm()
        })
    }

    else if (location.pathname === "/signup") {
        handleSubmitRegister(values.name, values.password, values.email)
        .catch((err) =>  {
            console.log(err)
            resetForm()
})
    
    }
}

    const NameInput = () => {
        return (
        <div className="form__item-text-container">
            <p className="form__item-text">Name</p>
            <input onChange={handleChange} value={values.name || ''} id="input_name" type="name" name="name" className="form__item-input"  />
            <ErrorMessage isValid={isValid} text={errors.name} />
        </div>
        )
    }


    const buttonClassName = `${location.pathname.includes("/signup") ? "form__button" : "form__button form__button_signin"}`;
    const ifDisabledClass = `${isValid ? `${buttonClassName}` : `${buttonClassName} form__button_disabled`}`

    return (
        <form className="form" onSubmit={handleSubmit}>
        <NavLink className="profile__link" to="/"><img src={logo} alt="Logo" className="form__logo"/></NavLink>
        <h1 className="form__title">{title}</h1>
    
        {location.pathname === "/signup" && NameInput()
        
        }
        <p className="form__item-text">E-mail</p>
        <input onChange={handleChange} id="input_email" name="email" type="email" className="form__item-input" value={values.email || ''}  />
        <ErrorMessage  isValid={isValid} text={errors.email}/>
        
        <p className="form__item-text">Password</p>
        <input onChange={handleChange} value={values.password || ''} id="input_password" type="password" name="password" className="form__item-input" />
        <ErrorMessage  isValid={isValid} text={errors.password}/>
        
        <button className={ifDisabledClass} disabled={!isValid} type="submit">{button}</button>
        
        <div className="form__link-container">
            <p className="form__link-text">{text}</p>
            {location.pathname.includes("/signup") && (
            <NavLink className="form__link " to="/signin">Login</NavLink>
            )} {location.pathname.includes("/signin") && (
            <NavLink className="form__link" to="/signup">Register</NavLink>
            )}
        </div>
    </form>
        )
}

export default Form;

