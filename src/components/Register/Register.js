import React from "react";
import './Register.css';
import Form from "../Form/Form"



function Register ({ handleRegister }) {

    return (
        <div className="register">
            <Form 
            handleSubmitRegister={handleRegister}
            title={"Добро пожаловать!"}
            button={"Зарегистрироваться"}
            text ={"Уже зарегистрированы?"}
            />
        </div>
        )
}

export default Register;