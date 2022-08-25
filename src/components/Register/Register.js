import React from "react";
import './Register.css';
import Form from "../Form/Form"

function Register ({ handleRegister }) {

    return (
        <div className="register">
            <Form 
            handleSubmitRegister={handleRegister}
            title={"Welcome!"}
            button={"Register"}
            text ={"Already registered?"}
            />
        </div>
        )
}

export default Register;