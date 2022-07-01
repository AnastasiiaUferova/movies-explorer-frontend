import React from "react";
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SavedMovies ({isLoading, savedCards, showError, renderSavedCards, onCardDelete, renderInitialCards, isSaved}) {

    const [searchQuery, setSearchQuery] = useState('');
    const [activeSearch, setActiveSearch] = useState(false);
    
    const [isChecked, setIsChecked] = useState(false);
    const [optionCards, setOptionCards] =  useState([]);


    useEffect(() => {
        renderSavedCards();
    }, []);


useEffect(() => {
        setIsChecked(false)
        setSearchQuery('')
        setOptionCards(savedCards)
    }, [savedCards]); 

    useEffect(() => {
        setOptionCards(savedCards)
    }, [savedCards]); 


    function handleChangeQuery(item) {
        setSearchQuery(item);
        setActiveSearch(true);
    }

    function handleCheck(e) {
        setIsChecked((e.target.checked))
        console.log(isChecked)

        if (!isChecked) {
            setOptionCards(savedCards.filter(card => card.duration <= 40))
        }
        else 
        {
            setOptionCards(savedCards)
        }
    }

    return(
    <div className="movies">
    <SearchForm onChageQuery={handleChangeQuery} />
    <FilterCheckbox handleCheck={handleCheck} checked={isChecked}/>
    <MoviesCardList 
            query={searchQuery} 
            isLoading={isLoading} 
            showError={showError} 
            activeSearch={activeSearch}
            savedCards={optionCards}
            onCardDelete={onCardDelete}
            isSaved={isSaved}
            renderSavedCards={renderSavedCards}
            renderInitialCards={renderInitialCards}
            />
</div>
    )
}

export default SavedMovies;