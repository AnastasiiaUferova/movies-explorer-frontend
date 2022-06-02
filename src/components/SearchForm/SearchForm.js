import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm () {
    return (
        <div className="search">
            <div className="search__container">
                <input className="search__input" placeholder="Фильм" type="text"></input>
            <FilterCheckbox />
            </div>
        </div>
        )

}

export default SearchForm;