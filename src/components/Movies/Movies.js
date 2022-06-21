import React from "react";
import './Movies.css';
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

function Movies () {

    const [searchQuery, setSearchQuery] = useState('');
    const [optionCards, setOptionCards] =  useState([]);
    const [showError, setShowError] = useState(false);
    const [activeSearch, setActiveSearch] = useState(false);
    const [savedCards, setSavedCards] = useState(() => {
        const saved = sessionStorage.getItem('saved-movies');
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });

    const [toggleCardState, setToggleCardState] = useState(false);

    const [isChecked, setIsChecked] = useState(() => {
        return JSON.parse(sessionStorage.getItem('checked'))
    });

    const [cards, setCards] = useState([]);

    const [isLoading, setIsLoading] = useState(false);


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


    
    
    useEffect(() => {
        sessionStorage.setItem('checked', JSON.stringify(isChecked));
        if (isChecked) {
            setOptionCards(cards.filter(card => card.duration <= 40))
        }
        else setOptionCards(cards)
        
    }, [isChecked, cards]); 



useEffect(() => {
        if (searchQuery === "") {
            setCards(JSON.parse(sessionStorage.getItem('movies')))
        }
    }, [searchQuery]);



    function handleChangeQuery(item) {
        setSearchQuery(item);
        setIsLoading(true);
        setActiveSearch(true);
        moviesApi.getMovies()
            .then((cards) => {
                setCards(cards);
                sessionStorage.setItem('movies', JSON.stringify(cards))
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

    let selectedCard

    function handleToggleCard (data) {
        
        selectedCard = { 
            country: (data.country !==null) ? data.country : 'Country',
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: `https://api.nomoreparties.co${data.image.url}`,
            trailerLink: data.trailerLink,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
            thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
            movieId: data.id,
        }


        let idArray = []

        const storedSavedMovies = JSON.parse(localStorage.getItem('saved-movies'))

        storedSavedMovies.forEach(card => idArray.push(card.movieId))
        if (idArray.includes(selectedCard.movieId)) {
            mainApi
            .deleteCard((storedSavedMovies.find(card => card.movieId === selectedCard.movieId))._id)
            .then(() => {
                setSavedCards((state) => state.filter((newCard) => newCard.movieId !== selectedCard.movieId));
                localStorage.setItem('saved-movies', JSON.stringify(savedCards))
                console.log(savedCards)
                setToggleCardState(true);
            })
            .catch((err) => {
                console.log(err);
            });
        }

        if(!idArray.includes(selectedCard.movieId)) {
            mainApi.addSavedMovie(selectedCard)
            .then(() => {
                setSavedCards([selectedCard,...savedCards]);
                localStorage.setItem('saved-movies', JSON.stringify(savedCards))
                setToggleCardState(true);

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

        }
    
    return (
        <div className="movies">
            <SearchForm onChageQuery={handleChangeQuery} />
            <FilterCheckbox handleCheck={handleCheck} checked={isChecked}/>
            <MoviesCardList 
            savedCards={savedCards} 
            selectedCard={selectedCard} 
            handleToggleCard={handleToggleCard} 
            query={searchQuery} 
            cards={optionCards} 
            isLoading={isLoading} 
            showError={showError} 
            activeSearch={activeSearch}
            />
        </div>
        )
}


export default Movies;



