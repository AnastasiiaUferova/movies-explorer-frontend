import React from "react";
import './Movies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoreButton from "../MoreButton/MoreButton";

function Movies () {
    return (
        <div className="movies">
            <SearchForm />
            <MoviesCardList />
            <MoreButton />
        </div>
        )
}

export default Movies;