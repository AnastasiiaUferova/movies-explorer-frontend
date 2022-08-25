import React from 'react';
import "./InfoTooltip.css"


function InfoTooltip({isOpen, onClose, text, image}) { 
    return (
        <div className={isOpen ? `popup popup_opened` : `popup`} >
            <div className="popup__container">
                <button className="popup__close-button" onClick={onClose}></button>
                <img
                className="popup__info-image"
                src={image}
                alt="confirmation sign"
                />
                <h2 className="popup__title">{text}</h2>
    
            </div>
        </div>
    );
}

export default InfoTooltip