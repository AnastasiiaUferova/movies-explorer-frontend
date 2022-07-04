import React from "react";
import "./ErrorMessage.css";

function ErrorMessage ({isValid, text}) {


    const errorClassName = `${isValid ? "error-message__text" : "error-message__text error-message__text_visible"}`;
    const optionText = text || "."
    return (
        <div className="error-message">
            <span className={errorClassName}>{optionText}</span>
        </div>
        )

}

export default ErrorMessage;






