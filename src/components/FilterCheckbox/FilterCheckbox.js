import React from "react";
import "./FilterCheckbox.css";


function FilterCheckbox ({handleCheck, checked}) {


    return (
        <div className="checkbox">
            <label className="checkbox__switch">
                <input className="checkbox__input" type="checkbox"
                    defaultChecked={checked}
                    onChange={handleCheck} />
                <span className="checkbox__slider"></span>
            </label>
            <p className="checkbox__text">Short movies</p>
        </div>
        )
}

export default FilterCheckbox;
