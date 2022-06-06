import React from "react";
import "./FilterCheckbox.css";


function FilterCheckbox () {
    return (
        <div className="checkbox">
            <label className="checkbox__switch">
                <input className="checkbox__input" type="checkbox" />
                <span className="checkbox__slider"></span>
            </label>
            <p className="checkbox__text">Короткометражки</p>
        </div>
        )
}

export default FilterCheckbox;
