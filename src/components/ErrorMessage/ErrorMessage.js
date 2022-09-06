import React from "react";
import "./ErrorMessage.css";

function ErrorMessage ({text}) {

    const optionText = text || '.'
    const errorClassName = `${optionText===text ? "error-message__text_visible error-message__text" : "error-message__text"}`;
    
    return (
        <div className="error-message">
            <span className={errorClassName}>{optionText}</span>
        </div>
        )
}

export default ErrorMessage;
