import React from "react";
import './SearchForm.css';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm () {
    return (
        <div className="search">
            <div className="search__container">
                <form className="search__container-form" >
                    <input className="search__input" placeholder="Фильм" type="text" required></input>
                    <button className="search__button" type="submit"></button>
                </form>
            <FilterCheckbox />
            </div>
        </div>
        )

}

export default SearchForm;