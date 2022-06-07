import React from "react";
import "./App.css";
import "../../index.css";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import Footer from "../Footer/Footer";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
    let location = useLocation();

    const isHeaderVisible = () => {
        const locations = ["/", "/saved-movies", "/movies", "/profile"];
        return locations.includes(location.pathname);
    };

    const isFooterVisible = () => {
        const locations = ["/", "/saved-movies", "/movies"];
        return locations.includes(location.pathname);
    };

    return (
        <div className="root">
            {isHeaderVisible() && <Header />}
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/movies" element={<Movies />}></Route>
                <Route path="/saved-movies" element={<SavedMovies />}></Route>
                <Route path="/signup" element={<Register />}></Route>
                <Route path="/signin" element={<Login />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/error" element={<ErrorScreen />}></Route>
            </Routes>
            {isFooterVisible() && <Footer />}
            <InfoTooltip />
        </div>
    );
}

export default App;

