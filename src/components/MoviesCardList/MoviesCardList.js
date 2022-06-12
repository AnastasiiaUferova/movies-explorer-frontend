import React from "react";
import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import { useDebouncedCallback, } from 'use-debounce';
import { useState, useEffect, useCallback} from "react";
import MoreButton from "../MoreButton/MoreButton";

function MoviesCardList ({cards, query}) {

    const [moviesCount, setMoviesCount] = useState(0);

    const sessionStorageQuery = sessionStorage.getItem('query');


    const optionQuery = (query !=='') ?`${query}` : `${sessionStorageQuery}`;

    console.log(optionQuery)


    const totalFiltered = cards.filter(card => card.nameRU.includes(optionQuery)).slice(0, moviesCount);


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


function handleRender () {
    setMoviesCount(window.innerWidth>768 ? moviesCount+3 : moviesCount+2)
}


console.log((query !=='' || sessionStorageQuery !==''))

/*console.log(query);
console.log(sessionStorageQuery) */

    return (
        <div>
        <div className="card-list">
        <div className="card-list__container">
            {(query !=='' || sessionStorageQuery !=='') &&
        totalFiltered
        .map((card) => (
                    <MoviesCard key={card.id} card={card}/>
                ))}
        </div>
        </div>
        { (query !== '' && totalFiltered.length === moviesCount && totalFiltered.length > 3) &&
        <MoreButton handleRender={handleRender} />}
        </div>
        )
}

export default MoviesCardList;

