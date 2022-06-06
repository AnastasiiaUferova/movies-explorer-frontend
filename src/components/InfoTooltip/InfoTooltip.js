import React from 'react';
import "./InfoTooltip.css"

import tick from "../../images/Tick.svg";

function InfoTooltip({isOpen, onClose, text, image}) { 
    return (
        <div className="popup">
            <div className="popup__container">
                <button className="popup__close-button" type="button" onClick={onClose}></button>
                <img
                className="popup__info-image"
                src={tick}
                alt="Знак подтверждения"
                />
                <h2 className="popup__title">Успешная регистрация</h2>
    
            </div>
        </div>
    );
}

export default InfoTooltip