import React from "react";
import './SearchForm.css';
import { useState, useEffect } from "react";

function SearchForm ({onChageQuery}) {

const [searchQuery, setSearchQuery] = useState(() => {
            const saved = sessionStorage.getItem('query');
            const initialValue = JSON.parse(saved);
            return initialValue || "";
        });

    function handleChangeQuery(e) {
        setSearchQuery(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onChageQuery(searchQuery);
    }

    useEffect(() => {
        sessionStorage.setItem('query', JSON.stringify(searchQuery))
    }, [searchQuery]); 


    return (
        <div className="search">
            <div className="search__container">
                <form className="search__container-form" onSubmit={handleSubmit}>
                    <input value={searchQuery} onChange={handleChangeQuery} className="search__input" placeholder="Фильм" type="text" required></input>
                    <button className="search__button" type="submit"></button>
                </form>
            </div>
        </div>
        )

}

export default SearchForm;