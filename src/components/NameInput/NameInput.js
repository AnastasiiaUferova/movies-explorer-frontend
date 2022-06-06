import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function NameInput () {
    return (
        <div className="form__item-text-container">
            <p className="form__item-text">Имя</p>
            <input id="input_name" type="name" name="name" className="form__item-input" required />
            <ErrorMessage />
        </div>
        )
}

export default NameInput;


