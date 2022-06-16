import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import { useDebouncedCallback, } from 'use-debounce';
import { useState, useEffect, useCallback} from "react";
import MoreButton from "../MoreButton/MoreButton";
import Preloader from "../Preloader/Preloader";


function MoviesCardList ({cards, query, isLoading, showError}) {
    

    const [moviesCount, setMoviesCount] = useState(0);

    const sessionStorageQuery = JSON.parse(sessionStorage.getItem('query'));

    const optionQuery = (query !=='') ? query : sessionStorageQuery;

    const [isLiked, setIsLiked] = useState(false);

    const totalFiltered = () => {
        if (cards.lenght !==0){
            return cards.filter(card => card.nameRU.includes(optionQuery)).slice(0, moviesCount);
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


const additionalComponent = () => {
    if (isLoading && totalFiltered().length ===0 ) {
        return <Preloader />
    }
    if (totalFiltered().length ===0) {
        return (
            <div className="card-list__message-container">
                <p className="card-list__message">Ничего не найдено</p>
            </div>
        )
    }
    if (totalFiltered().length ===0 && showError) {
        return (
            <div className="card-list__message-container">
                <p className="card-list__message">Во время запроса произошла ошибка. Возможно, проблема 
                с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
            </div>
        )
    }
}


    return (
        <div>
        <div className="card-list"> 
            {additionalComponent()}
        <div className="card-list__container">
            {((query !==''|| sessionStorageQuery !=='') && totalFiltered().length !==0) &&
        totalFiltered()
        .map((card) => (
                    <MoviesCard key={card.id} card={card}/>
                ))}
        </div>
        </div>
        { (query !== "" && totalFiltered().length === moviesCount && totalFiltered().length > 3) &&
        <MoreButton handleRender={handleRender} />}
        </div>
        )
}

export default MoviesCardList;

