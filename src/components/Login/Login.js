import React from "react";
import './Login.css';
import Form from "../Form/Form"


function Login({ handleLogin }) {



    return (
        <div className="login">
            <Form 
            handleSubmitLogin={handleLogin}
            title={"Рады видеть!"}
            button={"Войти"}
            text = {"Ещё не зарегистрированы?"}/>
        </div>
        )
}

export default Login;



