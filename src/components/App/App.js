import React from "react";
import './App.css';
import '../../index.css'
import { Route, useHistory, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="root">
        <Header />
          <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/saved-movies" element={<SavedMovies />}></Route>
          </Routes>
        <Footer />
    
    </div>
  );
}

export default App;

//<Route path="/" element={<Main />}></Route>
