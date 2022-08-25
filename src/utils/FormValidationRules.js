
export default function validate(values) {
    
    const namePattern = new RegExp (/^[а-яА-Яa-zA-ZёË\- ]{1,}$/i)
    const emailPattern = new RegExp (/^\w+[\w-.]*@\w+((-\w+)|(\w*))\.[a-z]{2,5}$/i)
    let errors = {};
    
    if (!values.email) {
        errors.email = "This is a required field";
    }
    else if (!emailPattern.test(values.email)) {
        errors.email ="Please enter a valid email";
    }
    
    if (!values.password) {
        errors.password = "This is a required field";
    } else if (values.password.length < 2) {
        errors.password = "Password must be more than 2 characters";
    }

    if (!values.name ) {
        errors.name = "This is a required field";
    }

    else if (values.name.length === 1 ) {
        errors.name = "Name must be more than 2 characters";
    }

    else if (values.name.length === 1 && !namePattern.test(values.name)) {
        errors.name = "Unacceptable symbols";
        
    }

    else if (values.name.length > 1  && !namePattern.test(values.name)) {
        errors.name = "Unacceptable symbols";
        
    }
    
    return errors;
};


