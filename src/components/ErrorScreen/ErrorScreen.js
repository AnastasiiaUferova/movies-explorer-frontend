import React from "react";
import './ErrorScreen.css'
import { useNavigate } from "react-router-dom";

function ErrorScreen () {

    const navigate = useNavigate();

    function goBack () {
            return navigate(-1);
        }

    return (
        <div className="error-screen">
            <h1 className="error-screen__title">404</h1>
            <p className="error-screen__text">Page not found</p>
            <button className="error-screen__button" onClick={goBack}>Go back</button>
        </div>
        )

}


export default ErrorScreen;