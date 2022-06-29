import React from "react";
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SavedMovies ({isLoading, savedCards, showError, renderSavedCards, onCardDelete, isSaved}) {

    const [searchQuery, setSearchQuery] = useState('');
    const [activeSearch, setActiveSearch] = useState(false);
    
    const [isChecked, setIsChecked] = useState(() => {
        return JSON.parse(sessionStorage.getItem('checked'))
    });
    const [optionCards, setOptionCards] =  useState([]);


useEffect(() => {
        sessionStorage.setItem('checked', JSON.stringify(isChecked));
        if (isChecked) {
            setOptionCards(savedCards.filter(card => card.duration <= 40))
        }
        else setOptionCards(savedCards)
        
    }, [isChecked, savedCards]); 


    function handleChangeQuery(item) {
        setSearchQuery(item);
        setActiveSearch(true);
        renderSavedCards()
    }

    function handleCheck(e) {
        setIsChecked((e.target.checked))
    }

    return(
    <div className="movies">
    <SearchForm onChageQuery={handleChangeQuery} />
    <FilterCheckbox handleCheck={handleCheck} checked={isChecked}/>
    <MoviesCardList query={searchQuery} 
            isLoading={isLoading} 
            showError={showError} 
            activeSearch={activeSearch}
            savedCards={optionCards}
            onCardDelete={onCardDelete}
            isSaved={isSaved}/>
</div>
    )
}

export default SavedMovies;
