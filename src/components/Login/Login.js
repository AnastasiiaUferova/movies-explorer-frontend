import React, { useState }  from "react";
import './Login.css';
import Form from "../Form/Form"


function Login({ handleLogin }) {

    
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const {email, password} = data;

    function handleChange(e) {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        handleLogin(password, email).catch((err) => setData({ ...data, message: err.message }));
    }

    return (
        <div className="login">
            <Form 
            handleSubmit={handleSubmit}
            email={email}
            password={password}
            handleChange={handleChange}
            title={"Рады видеть!"}
            button={"Войти"}
            text = {"Ещё не зарегистрированы?"}/>
        </div>
        )
}

export default Login;



