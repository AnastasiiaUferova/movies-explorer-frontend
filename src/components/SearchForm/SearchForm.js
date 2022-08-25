import React from "react";
import { useLocation } from "react-router-dom";
import './SearchForm.css';
import { useState, useEffect } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function SearchForm ({onChageQuery}) {

let location = useLocation();


const [searchQuery, setSearchQuery] = useState(() => {
    if (sessionStorage.getItem('query') && location.pathname === "/movies") {
        const saved = sessionStorage.getItem('query');
        const initialValue = JSON.parse(saved);
        return initialValue 
    }

    else return ""
});

const [error, setError] = useState('');
const [isValid, setIsValid] = useState(true)

    function handleChangeQuery(e) {
        const target = e.target;
        const value = target.value;
        setSearchQuery(value);
        setIsValid(true);
        setError("");
    }

    function validate () {
        function isRequired(value) {
            return value != null && value.trim().length > 0;
        }
    
        if (!isRequired(searchQuery)) {
            setIsValid(false);
            setError("Keyword required");
        } 
        else {
            setIsValid(true);
            setError("");
        }
    }



    function handleSubmit(e) {
        e.preventDefault();
        validate ()
        if(isValid) {
        onChageQuery(searchQuery.toLowerCase() || searchQuery.toUpperCase());
        }
        else return 
    }

    useEffect(() => {
        if (location.pathname === "/movies") {
            sessionStorage.setItem('query', JSON.stringify(searchQuery))
        }

    }, [searchQuery, location.pathname]); 


    return (
        <div className="search">
            <div className="search__container">
                <form className="search__container-form" onSubmit={handleSubmit}>
                    <input value={searchQuery} onChange={handleChangeQuery} className="search__input" placeholder="Movie" type="text" ></input>
                    <button className="search__button" type="submit"></button>
                </form>
                <ErrorMessage text={error} isValid={isValid}/>
            </div>
        </div>
        )

}

export default SearchForm;





