import React, { useState}  from "react";
import './Register.css';
import Form from "../Form/Form"


function Register ({ handleRegister }) {

    const [data, setData] = useState({
        email: '',
        password: '',
        name: ''
      })
      
      const {name, email, password} = data;
  
      function handleChange(e) {
        const {name, value} = e.target;
        setData({
          ...data,
          [name]: value
        });
      }
    
      function handleSubmit(e){
        e.preventDefault();
        handleRegister(name, password, email)
              .catch((err) => setData({...data,  message: err.message }))
        }
    return (
        <div className="register">
            <Form 
            handleSubmit={handleSubmit}
            name={name}
            email={email}
            password={password}
            handleChange={handleChange}
            title={"Добро пожаловать!"}
            button={"Зарегистрироваться"}
            text ={"Уже зарегистрированы?"}/>
        </div>
        )
}

export default Register;