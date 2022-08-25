import React from "react";
import './Login.css';
import Form from "../Form/Form"


function Login({ handleLogin }) {

    return (
        <div className="login">
            <Form 
            handleSubmitLogin={handleLogin}
            title={"Welcome!"}
            button={"Login"}
            text = {"Not registered yet?"}/>
        </div>
        )
}

export default Login;



