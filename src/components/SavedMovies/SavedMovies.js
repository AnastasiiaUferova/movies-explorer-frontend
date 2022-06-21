import React from "react";
import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import mainApi from "../../utils/MainApi";


function SavedMovies () {

    const [searchQuery, setSearchQuery] = useState('');
    const [showError, setShowError] = useState(false);

    const [isChecked, setIsChecked] = useState(() => {
        return JSON.parse(sessionStorage.getItem('checked'))
    });

    const [savedCards, setSavedCards] = useState([]);
    const [optionCards, setOptionCards] =  useState([]);

    const [isLoading, setIsLoading] = useState([]);

    const [toggleCardState, setToggleCardState] = useState(false);
    
    
    useEffect(() => {
        sessionStorage.setItem('checked', JSON.stringify(isChecked));
        if (isChecked) {
            setOptionCards(savedCards.filter(card => card.duration <= 40))
        }
        else setOptionCards(savedCards)
        
    }, [isChecked, savedCards]); 


useEffect(() => {
        if (searchQuery === "") {
            setSavedCards(JSON.parse(localStorage.getItem('saved-movies')))
        }
    }, [searchQuery]);

    
useEffect(()=> {
    setIsLoading(true)
        mainApi.getSavedMovies()
            .then((cards) => {
                setSavedCards(cards);
                console.log(cards)
                localStorage.setItem('saved-movies', JSON.stringify(cards))
            })
            .catch((err) => {
                setShowError(true);
                console.log(err)
            })
            .finally( () => {
                setIsLoading(false)
            }
            )
}, [])


useEffect(()=> {

    if (toggleCardState) {
        mainApi.getSavedMovies()
        .then((cards) => {
            localStorage.setItem('saved-movies', JSON.stringify(cards))
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
}, [toggleCardState])



function handleDeleteCard(card) {
    return mainApi
        .deleteCard(card._id)
        .then(() => {
            setSavedCards((state) => state.filter((newCard) => newCard._id !== card._id))
            localStorage.setItem('saved-movies', JSON.stringify(savedCards))
            setToggleCardState(true);
        })
        .catch((err) => {
            console.log(err);
        });
}


    function handleChangeQuery(item) {
        setSearchQuery(item);
    }

    function handleCheck(e) {
        setIsChecked((e.target.checked))
    }

    return(
    <div className="movies">
    <SearchForm onChageQuery={handleChangeQuery} />
    <FilterCheckbox handleCheck={handleCheck} checked={isChecked}/>
    <MoviesCardList cards={optionCards} savedCards={optionCards} query={searchQuery} isLoading={isLoading} showError={showError} handleDeleteCard={handleDeleteCard}/>
</div>
    )
}

export default SavedMovies;
