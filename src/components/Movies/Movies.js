import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function Movies ({cards}) {

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);

    const [isChecked, setIsChecked] = React.useState(false);

    const optionCards = isChecked ? filteredCards : cards;

    function handleChangeQuery(item) {
        setSearchQuery(item)
    }

    function handleCheck(e) {
        setIsChecked((e.target.checked))
        setFilteredCards(cards.filter(card => card.duration <= 40))
    }
    

    /*const [optionCards, setOptionCards] = useState(() => {
        
        const initialValue = JSON.parse(sessionStorage.getItem('movies'));

        return initialValue || [];
    });

    useEffect(() => {
        sessionStorage.setItem('movies', JSON.stringify(cards));
        console.log(optionCards)
    }, []);
    */


    return (
        <div className="movies">
            <SearchForm onChageQuery={handleChangeQuery} />
            <FilterCheckbox handleCheck={handleCheck} checked={isChecked}/>
            <MoviesCardList query={searchQuery} cards={optionCards}/>
        </div>
        )
}


export default Movies;