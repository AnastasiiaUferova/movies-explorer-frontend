import React from "react";
import './Profile.css';
import { NavLink } from "react-router-dom";
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import {CurrentUserContext} from "../../contexts/CurrentUserContext"
import validate from "../../utils/FormValidationRules";
import useForm from "../../hooks/useForm";


function Profile({onUpdateUser, signOut} ) {

    const currentUser = React.useContext(CurrentUserContext);

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        isValid, 
    } = useForm(onSubmit, validate);


    function onSubmit() {
        onUpdateUser({
            name: values.name,
            email: values.email
        }).catch((err) => {
            console.log(err)
        })
    }
const differentValues = () => {
    if ((values.name !== currentUser.name) || (values.email !== currentUser.email)){
        return true
    }
    else return false
}

    return (
<div className="profile">
    <form onSubmit={handleSubmit} className="profile__form">
        <h1 className="profile__title">Hello, {values.name}!</h1>

        <div className="profile__input-container">
            <label className="profile__input-container-label">Name</label>
            <input value={values.name || ""} onChange={handleChange} id="profile-input-name" type="text" name="name" className="profile__item-input profile__item-input_type_name" defaultValue={currentUser.name} />
        </div>
        <ErrorMessage isValid={isValid} text={errors.name} />

        <div className="profile__input-container">
            <label className="profile__input-container-label">E-mail</label>
            <input value={values.email || ""} onChange={handleChange} id="profile-input-email" type="email" name="email" className="profile__item-input" defaultValue={currentUser.email} />
        </div>
        <ErrorMessage isValid={isValid} text={errors.email} />

        <div className="profile__link-container">
            <button type="submit" disabled={!isValid || !differentValues()} className="profile__button">Edit</button>
            <button onClick={signOut} className="profile__button"><NavLink className="profile__link" to="/">Logout</NavLink></button>
        </div>
    </form>
</div>

        )
}

export default Profile;