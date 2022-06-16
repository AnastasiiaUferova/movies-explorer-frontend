import React from "react";
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import moviesApi from "../../utils/MoviesApi";


function SavedMovies () {

    const [searchQuery, setSearchQuery] = useState('');
    const [optionCards, setOptionCards] =  useState([]);
    const [showError, setShowError] = useState(false)

    const [isChecked, setIsChecked] = useState(() => {
        return JSON.parse(sessionStorage.getItem('checked'))
    });

    const [cards, setCards] = useState([]);

    const [isLoading, setIsLoading] = useState([]);
    
    
    useEffect(() => {
        sessionStorage.setItem('checked', JSON.stringify(isChecked));
        if (isChecked) {
            setOptionCards(cards.filter(card => card.duration <= 40))
        }
        else setOptionCards(cards)
        
    }, [isChecked, cards]); 


useEffect(() => {
        if (searchQuery === "") {
            setCards(JSON.parse(localStorage.getItem('movies')))
        }
    }, [searchQuery]);


    function handleChangeQuery(item) {
        setSearchQuery(item);
        setIsLoading(true)
        moviesApi.getMovies()
            .then((cards) => {
                setCards(cards);
                localStorage.setItem('movies', JSON.stringify(cards))
            })
            .catch((err) => {
                setShowError(true);
                console.log(err)
            })
            .finally( () => {
                setIsLoading(false)
            }
            )
    }

    function handleCheck(e) {
        setIsChecked((e.target.checked))
    }

    return(
    <div className="movies">
    <SearchForm onChageQuery={handleChangeQuery} />
    <FilterCheckbox handleCheck={handleCheck} checked={isChecked}/>
    <MoviesCardList query={searchQuery} cards={optionCards} isLoading={isLoading} showError={showError}/>
</div>
    )
}

export default SavedMovies;



