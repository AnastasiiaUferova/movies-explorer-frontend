import React from "react";
import './Register.css';
import Form from "../Form/Form"


function Register () {
    return (
        <div className="register">
            <Form 
            title={"Добро пожаловать!"}
            button={"Зарегистрироваться"}
            text = {"Уже зарегистрированы?"}/>
        </div>
        )
}

export default Register;