import React from "react"; 
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import {CurrentUserContext} from "../contexts/CurrentUserContext"


const useForm = (callback, validate) => {

    const currentUser = React.useContext(CurrentUserContext);
    let location = useLocation();

const [values, setValues] = useState({
    email: '',
    password: '',
    name: ''
});

const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [isValid, setIsValid] = useState(true);
const [isDirty, setIsDirty] = useState(false);



useEffect(() => {
    if(location.pathname === "/profile")

    setValues({
        email: currentUser.email,
        name: currentUser.name
    })
}, [currentUser, location.pathname]);


const resetForm = () => {
    setValues({
        email: '',
        password: '',
        name: ''
    });
}



useEffect(() => {
    if(location.pathname === "/signup"){
    if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        setIsSubmitting(false)
        resetForm()
    }
}
}, [errors, isSubmitting, callback, location.pathname ]);


useEffect(() => {
    if(location.pathname === "/signup"){
    if (Object.keys(errors).length !== 0 || isDirty) {
        setIsValid(false)

    }
    else if ((Object.keys(errors).length === 0 )) 
    {
        setIsValid(true)
    }
}

}, [isValid, errors, location.pathname, isDirty]);



useEffect(() => {
    const locations = ["/signin", "/profile"]
    if(locations.includes(location.pathname)) {

    if (Object.keys(errors).length !==1) {
        setIsValid(false)
    }
    else setIsValid(true)
    }

}, [isValid, errors, location.pathname]);


useEffect(() => {
    const locations = ["/signin", "/profile"]
    if(locations.includes(location.pathname)) {
    if (Object.keys(errors).length === 1 && isSubmitting) {
        callback();
        setIsSubmitting(false)
        resetForm()
    }
}
}, [errors, isSubmitting, callback, location.pathname])


const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
};

const [isChanged, setIsChanged] = useState(false)

const handleChange = (event) => {
    setIsDirty(true)
    setErrors(validate(values));
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    setIsChanged(true)
};


useEffect(() => {
    if (isChanged) {
        setErrors(validate(values));
    }
}, [isChanged, validate, values]);

return {
    handleChange,
    handleSubmit,
    values,
    errors,
    resetForm,
    isValid,
    setIsSubmitting
}
};

export default useForm;