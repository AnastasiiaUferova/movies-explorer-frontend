import React from "react";
import "./App.css";
import "../../index.css";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";
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
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";

import tick from "../../images/Tick.svg"
import cross from "../../images/Cross.svg";

import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import * as auth from "../../utils/auth";
import ProtectedRoutes from "../ProtectedRoute/ProtectedRoute";

function App() {
    let location = useLocation();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isTooltipPopupOpen, setIsTooltipPopupOpen] = useState(false);
    const [imageTooltip, setImageTooltip] = useState('');
    const [textTooltip, setTextTooltip] = useState('');

    useEffect(() => {
        tokenCheck();
    }, []);

    /*useEffect(() => {
        if (loggedIn) {
            navigate("/");
        }
    }, [loggedIn, navigate]);*/

    useEffect(() => {
        if (loggedIn===true) {
            mainApi.getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => {
                console.log(err);
            });
        }
    }, [loggedIn]);


    function handleUpdateUser(userData) {
        return mainApi
            .changeUserInfo(userData)
            .then((result) => {
                setCurrentUser(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    function handleRegister(password, email, name) {
        return auth
            .register(password, email, name)
            .then(() => {
                setImageTooltip(tick);
                setTextTooltip("Вы успешно зарегистрировались!");
                setIsTooltipPopupOpen(true);
                setUserData({ name: name, email: email });
                setLoggedIn(true);
                navigate("/movies");
            })
            .catch(() => {
                setImageTooltip(cross);
                setTextTooltip("Что-то пошло не так! Попробуйте ещё раз.");
                setIsTooltipPopupOpen(true);
            });
    }

    function handleLogin(password, email) {
        return auth.authorize(password, email).then((data) => {
            if (data.token) {
                localStorage.setItem("token", data.token);
                setLoggedIn(true);
                navigate("/movies");
            }
        })
        .catch((err) => {
        setImageTooltip(cross);
        setTextTooltip(err);
        setIsTooltipPopupOpen(true);
        })
        
    }

    function tokenCheck() {
        const token = localStorage.getItem("token");
        if (token) {
            auth.getContent(token).then((data) => {
                if (data) {
                    setUserData({ name: data.name, email: data.email});
                    setLoggedIn(true);
                    navigate("/movies");
                }
            });
        }
    }

    function handleSignOut() {
        localStorage.removeItem("token");
        navigate("/signup");
        setLoggedIn(false);
    }

    const isHeaderVisible = () => {
        const locations = ["/", "/saved-movies", "/movies", "/profile"];
        return locations.includes(location.pathname);
    };

    const isFooterVisible = () => {
        const locations = ["/", "/saved-movies", "/movies"];
        return locations.includes(location.pathname);
    };

    return (
        <Fragment>
        <CurrentUserContext.Provider value={currentUser}>
        <div className="root">
            {isHeaderVisible() && <Header />}
            <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/signup" element={<Register handleRegister={handleRegister}/>}></Route>
            <Route exact path="/signin" element={<Login handleLogin={handleLogin}/>}></Route>
            <Route exact path="/error" element={<ErrorScreen />}></Route>
                <Route exact path="/movies"  element={<ProtectedRoutes loggedIn={loggedIn}><Movies /></ProtectedRoutes>}></Route>
                <Route exact path="/saved-movies" element={<ProtectedRoutes loggedIn={loggedIn}><SavedMovies /></ProtectedRoutes>}></Route>
                <Route exact path="/profile" element={<ProtectedRoutes loggedIn={loggedIn}><Profile /></ProtectedRoutes>}></Route>
            </Routes>
            {isFooterVisible() && <Footer />}
            <InfoTooltip />
        </div>
        </CurrentUserContext.Provider>
        </Fragment>
        
    );

    
}

export default App;




/*

<Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
<Route exact path="/movies"  element={<Movies />}></Route>
<Route exact path="/saved-movies" element={<SavedMovies />}></Route>
<Route exact path="/profile" element={<Profile />}></Route>
</Route>*/