
export default function validate(values) {
    
    const namePattern = new RegExp (/^[а-яА-Яa-zA-ZёË\- ]{1,}$/i)
    const emailPattern = new RegExp (/^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,5}$/i)
    let errors = {};
    
    if (!values.email) {
        errors.email = "Это обязательное поле";
    }
    else if (!emailPattern.test(values.email)) {
        errors.email ="Введите валидный email";
    }
    
    if (!values.password) {
        errors.password = "Это обязательное поле";
    } else if (values.password.length < 2) {
        errors.password = "Пароль должен более 2 символов";
    }

    if (!values.name ) {
        errors.name = "Это обязательное поле";
    }

    else if (values.name.length === 1 ) {
        errors.name = "Имя должно быть более 2 символов";
    }

    else if (values.name.length === 1 && !namePattern.test(values.name)) {
        errors.name = "Недопустимые символы";
        
    }

    else if (values.name.length > 1  && !namePattern.test(values.name)) {
        errors.name = "Недопустимые символы";
        
    }
    
    return errors;
};


