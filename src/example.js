import React, { useState}  from "react";
import './Register.css';
import Form from "../Form/Form"
import isEmail from 'validator/lib/isEmail';


function Register ({ handleRegister }) {


  const [errorName, setErrorName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [isNameValid, setIsNameValid] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const [data, setData] = useState({
    email: '',
    password: '',
    name: ''
  })

  const {name, email, password} = data;


  function validate () {
      if (!name) {
        setIsNameValid(false);
        setErrorName("Это обязательное поле")
        console.log(1)
      }

      else {
        setIsNameValid(true)
        setErrorName('')

      }

      if (typeof name !== "undefined") {
          
        const namePattern = new RegExp (/^[а-яА-ЯёЁa-zA-Z0-9- ]+$/i)
      
        if (!namePattern.test(name)) {
          setIsValid(false);
          setErrorName("Недопустимые символы")
          console.log(5)
        }


        if (name.length < 2) {
          setIsValid(false);
          setErrorName("Имя должно быть больше 2 символов")
          console.log(6)
        }
    }

    else {
      setIsNameValid(true)
      setErrorName('')
    }
    
  
      if (!email) {
        setIsEmailValid(false)
        setErrorEmail("Это обязательное поле")
        console.log(2)
        
      }

      else {
        setIsEmailValid(true)
        setErrorEmail('')
      }

      if (typeof email !== "undefined") {
          
        if (!isEmail(email)) {
          setIsEmailValid(false)
          setErrorEmail("Введите валидный email")
          console.log(4)
        }

        else {
          setIsEmailValid(true)
          setErrorEmail('')
        }

  

      if (!password) {
        setIsPasswordValid(false)
        setErrorPassword("Это обязательное поле")
        console.log(3)
      }

      else {
        setIsPasswordValid(true)
        setErrorPassword('')
      }

      if (typeof password !== "undefined") {


      if (password.length < 2) {
        setIsValid(false);
        setErrorPassword("Пароль должен быть больше 2 символов")
        console.log(7)
      }
    

    else {
      setIsPasswordValid(true)
      setErrorPassword('')
    }

    if (isNameValid && isEmailValid && isPasswordValid) {
      setIsValid(true)
      setErrorName('')
      setErrorPassword('')
      setErrorEmail('')
    }

    else {
      setIsValid(false)
    }
      }
    }
  }


  
      function handleChange(e) {
        const {name, value} = e.target;
        setData({
          ...data,
          [name]: value
        })
      
    }
    
      function handleSubmit(e){
        e.preventDefault();
        validate ()

        if(isValid) {

        handleRegister(name, password, email)
              .catch((err) =>  {
              setData({...data,  message: err.message })
              
      })
              
    }

      }
      
    return (
        <div className="register">
            <Form 
            handleSubmit={handleSubmit}
            name={name}
            email={email}
            nameError={errorName}
            emailError={errorEmail}
            passwordError={errorPassword}
            password={password}
            handleChange={handleChange}
            title={"Добро пожаловать!"}
            button={"Зарегистрироваться"}
            text ={"Уже зарегистрированы?"}
            isValid={isValid}/>
        </div>
        )
}

export default Register;