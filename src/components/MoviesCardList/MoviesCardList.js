import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import { useDebouncedCallback, } from 'use-debounce';
import { useState, useEffect, useCallback} from "react";
import MoreButton from "../MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router-dom";
import mainApi from "../../utils/MainApi";


function MoviesCardList ({cards, query, isLoading, showError, handleToggleCard, handleDeleteCard, activeSearch, savedCards, isSaved}) {

    let location = useLocation();
    
    const [moviesCount, setMoviesCount] = useState(0);

    const sessionStorageQuery = JSON.parse(sessionStorage.getItem('query'));

    const optionQuery = (query !=='') ? query : sessionStorageQuery;

    const totalFilteredInitial = () => {
        
        let initialList = []

        if (JSON.parse(sessionStorage.getItem('movies')) === null) {
            return initialList
        }

        if (cards !== null ){
            return cards.filter(card => card.nameRU.includes(optionQuery)).slice(0, moviesCount);
        }

        return initialList
    }


    const totalFilteredSaved = () => {
        let initialSavedList = []

        if (savedCards !== null){
            return savedCards.filter(card => card.nameRU.includes(optionQuery));
        }
        if (JSON.parse(localStorage.getItem('saved-movies')) === null) {
            return initialSavedList
        }
    }


    const Resize = useCallback(
        (width) => {
            if (width > 768) {
                setMoviesCount(12)
            }
            if (768 >= width) {
                setMoviesCount(8)
            }
            if ( 480 >= width) {
                setMoviesCount(5)
            }
        }, []
    )  //общая функция 

useEffect(() => {
        Resize(window.innerWidth)
    }, [Resize]) // изначальная отрисовка


    const dynamicResize = useDebouncedCallback(
        () => {
            Resize(window.innerWidth)
        }, 200
    ) 

    
useEffect(() => {
    window.addEventListener('resize', dynamicResize)
    return () => {
            window.removeEventListener('resize', dynamicResize);
    } 
}, [dynamicResize]) // при изменении ширины окна



useEffect(() => {
    window.addEventListener('resize', dynamicResize)
    return () => {
            window.removeEventListener('resize', dynamicResize);
    } 
}, [dynamicResize]) 



function handleRender () {
    setMoviesCount(window.innerWidth > 768 ? moviesCount+3 : moviesCount+2)
}

const additionalInitialComponent = () => {
    if (isLoading) {
        return <Preloader />
    }
    if (totalFilteredInitial().length === 0 && activeSearch) {
        return (
            <div className="card-list__message-container">
                <p className="card-list__message">Ничего не найдено</p>
            </div>
        )
    }
    if (totalFilteredInitial().length === 0 && showError) {
        return (
            <div className="card-list__message-container">
                <p className="card-list__message">Во время запроса произошла ошибка. Возможно, проблема 
                с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
            </div>
        )
    }
}

const additionalSavedMoviesComponent = () => {
    if (isLoading) {
        return <Preloader />
    }
    if (totalFilteredSaved().length === 0 ) {
        return (
            <div className="card-list__message-container">
                <p className="card-list__message">Ничего не найдено</p>
            </div>
        )
    }
    if (totalFilteredSaved().length === 0 && showError) {
        return (
            <div className="card-list__message-container">
                <p className="card-list__message">Во время запроса произошла ошибка. Возможно, проблема 
                с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
            </div>
        )
    }
}

const renderAdditionalComponent = () => {

    if (location.pathname === "/movies") {
        return additionalInitialComponent()
    }

    if(location.pathname === "/saved-movies") {
        return additionalSavedMoviesComponent()
    }

}


const renderInitial = (query !==''|| sessionStorageQuery !=='') && totalFilteredInitial().length !==0 && location.pathname === "/movies";
const renderSaved = location.pathname === "/saved-movies";

const finalCards = renderInitial ? totalFilteredInitial() : totalFilteredSaved()


    return (
        <div>
        <div className="card-list"> 
            {renderAdditionalComponent()}
        <div className="card-list__container">
        {finalCards.map((card) => {

            let isSaved;
            let idArray = []
            const storedSavedMovies = JSON.parse(localStorage.getItem('saved-movies'))
            storedSavedMovies.forEach(card => idArray.push(card.movieId))
            if (idArray.includes(card.id)) {
                isSaved = true
            }
            else isSaved = false


    return <MoviesCard key={card.id || card._id } isSaved={isSaved} card={card} onCardClick={renderSaved ? handleDeleteCard : handleToggleCard}/>
        })}
        </div>
        </div>
        { (location.pathname === "/movies" && (query !== "" || sessionStorageQuery!== "") 
        && totalFilteredInitial().length === moviesCount && totalFilteredInitial().length > 3) &&
        <MoreButton handleRender={handleRender} />}
        </div>
        )
}


export default MoviesCardList;





/* console.log(idArray)
            console.log(card)*/