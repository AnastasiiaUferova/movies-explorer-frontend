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
    const [isLoading, setIsLoading] = useState(false);
    const [cards, setCards] = useState([]);
    const [savedCards, setSavedCards] = useState([]);
    const [savedCardsIds, setSavedCardsIds ] = useState([]);
    const [isSaved, setIsSaved] = useState(false);



    useEffect(() => {
        tokenCheck()
    }, [])


useEffect(() => {
    if (loggedIn===true && localStorage.getItem("token")) {
        mainApi.getUserInfo()
        .then((userData) => {
            setCurrentUser(userData);
        })
        .catch((err) => {
            console.log(err);
        });

        renderSavedCards();
    }
}, [loggedIn, userData]);




function renderSavedCards () {
    setIsLoading(true)
    mainApi.getSavedMovies()
        .then((cards) => {
            const savedArray = cards.map((item) => ({ ...item, id: item.movieId }));
            localStorage.setItem('saved-movies', JSON.stringify(savedArray));
            
            setSavedCards(savedArray);
            const idArray = []
            JSON.parse(localStorage.getItem('saved-movies')).forEach(card => idArray.push(card.movieId))
            setSavedCardsIds(idArray);

        })
        .catch((err) => {
            setImageTooltip(cross);
            setTextTooltip("При загрузке фильмов произошла ошибка");
            setIsTooltipPopupOpen(true);
            console.log(err)
        })
        .finally( () => {
            setIsLoading(false)
        }
        )
}


function renderInitialCards() {
    setIsLoading(true);
    return moviesApi.getMovies()
        .then((cards) => {
            setCards(cards);
            sessionStorage.setItem('movies', JSON.stringify(cards))
        })
        .catch((err) => {
            setImageTooltip(cross);
            setTextTooltip("При загрузке фильмов произошла ошибка");
            setIsTooltipPopupOpen(true);
            console.log(err)
        })
        .finally( () => {
            setIsLoading(false)
        }
        )
    }

    console.log()


function handleCardDelete(card) {
        return mainApi
            .deleteCard(card._id)
            .then(() => {
                setSavedCards((state) => state.filter((newCard) => newCard._id !== card._id));
                localStorage.setItem('saved-movies', JSON.stringify(savedCards))
                const newArray = JSON.parse(localStorage.getItem('saved-movies')).filter((item) => item.movieId !== card.movieId);
                setSavedCardsIds(newArray)
            })
            .catch(() => {
                setImageTooltip(cross);
                setTextTooltip("Невозможно удалить фильм");
                setIsTooltipPopupOpen(true);
            })
    }


function handleCardAdd (data) {
    let selectedCard = { 
        country: (data.country !== null) ? data.country : 'Country',
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: (data.nameEN !== '') ? data.nameEN : data.nameRU,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
    }
    mainApi.addSavedMovie(selectedCard)
            .then((selectedCard) => {
                setSavedCards([ ...savedCards, selectedCard]);
                setSavedCardsIds([...savedCardsIds, selectedCard.movieId])
                localStorage.setItem('saved-movies', JSON.stringify(savedCards))
                setIsSaved(true)

            })
            .catch(() => {
                setImageTooltip(cross);
                setTextTooltip("Невозможно сохранить фильм");
                setIsTooltipPopupOpen(true);
            })
            .finally( () => {
                setIsLoading(false)
            }
            )
            
        }


        function handleToggleCard(card) {
            renderSavedCards ()
            const currentSavedMovie = savedCards.find((currenCard)=> currenCard.movieId === card.id);
            if (!currentSavedMovie) {
                handleCardAdd(card);
                renderSavedCards ()
            } else {
                handleCardDelete(currentSavedMovie);
                renderSavedCards ()
            }
        }


    function handleUpdateUser(userData) {
        return mainApi
            .changeUserInfo(userData)
            .then((result) => {
                setCurrentUser(result);
            })
            .catch((err) => {
                setImageTooltip(cross);
                if (err === "Ошибка 409") {
                    setTextTooltip("Пользователь с таким email уже существует");
                }
                if (err === "Ошибка 400") {
                    setTextTooltip("Введены невалидные данные");
                }
                if (err === "Ошибка 500") {
                    setTextTooltip("Ошибка сервера");
                }
                setIsTooltipPopupOpen(true)
            });
    }

    

    function handleRegister(name, email, password) {
        return auth
            .register(name, email, password)
            .then(() => {
                    handleLogin(email, password)
                    setImageTooltip(tick);
                    setUserData({ name: name, email: email});
                    setTextTooltip("Вы успешно зарегистрировались!");
                    setIsTooltipPopupOpen(true);
                    setLoggedIn(true);
                    navigate("/movies");
            })
            .catch((err) => {
                setImageTooltip(cross);
                if (err === "Ошибка 409") {
                    setTextTooltip("Пользователь с таким email уже существует");
                }
                if (err === "Ошибка 400") {
                    setTextTooltip("Введены невалидные данные");
                }
                if (err === "Ошибка 500") {
                    setTextTooltip("Ошибка сервера");
                }
                setIsTooltipPopupOpen(true)

            })
    }

    function handleLogin(email, password) {
        return auth.authorize(email, password).then((data) => {
            if (data.token) {
                localStorage.setItem("token", data.token);
                setUserData({ name: data.name, email: data.email});
                setLoggedIn(true);
                navigate("/movies");
            }
        })
        .catch((err) => {
            setImageTooltip(cross);
            if (err === "Ошибка 409") {
                setTextTooltip("Пользователь с таким email уже существует");
            }
            else if (err === "Ошибка 400") {
                setTextTooltip("Введены невалидные данные");
            }
            else if (err === "Ошибка 500") {
                setTextTooltip("Ошибка сервера");
            }
            else if (err === "Ошибка 401"){
                setTextTooltip("Неправильные почта или пароль");
            }
            setIsTooltipPopupOpen(true);
        });
        
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


    function handlePopupClose () {
        setIsTooltipPopupOpen(false)
    }


    function handleSignOut() {
            localStorage.removeItem('token');
            setLoggedIn(false);
            setCurrentUser({});
            sessionStorage.removeItem('movies');
            sessionStorage.removeItem('saved-movies');
            setCards([]);
            setSavedCards([]);
            navigate("/");
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
            {isHeaderVisible() && <Header loggedIn={loggedIn}/>}
            <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/signup" element={<Register handleRegister={handleRegister}/>}></Route>
            <Route exact path="/signin" element={<Login handleLogin={handleLogin}/>}></Route>
            <Route path="*" element={<ErrorScreen />}></Route>
                <Route exact path="/movies"  element={<ProtectedRoutes loggedIn={loggedIn}>
                    <Movies 
                    cards={cards}
                    renderInitialCards={renderInitialCards}
                    renderSavedCards={renderSavedCards}
                    isLoading={isLoading}
                    onCardToggle={handleToggleCard}
                    isSaved={isSaved}
                    />
                    </ProtectedRoutes>}></Route>
                <Route exact path="/saved-movies" element={<ProtectedRoutes loggedIn={loggedIn}>
                    <SavedMovies
                    savedCards={savedCards}
                    renderSavedCards={renderSavedCards}
                    isLoading={isLoading}
                    onCardDelete={handleCardDelete}
                    isSaved={isSaved}
                    /></ProtectedRoutes>}></Route>
                <Route exact path="/profile" element={<ProtectedRoutes loggedIn={loggedIn}>
                    <Profile signOut={handleSignOut} onUpdateUser={handleUpdateUser}/>
                    </ProtectedRoutes>}></Route>
            </Routes>
            {isFooterVisible() && <Footer />}
            <InfoTooltip text={textTooltip} image={imageTooltip} isOpen={isTooltipPopupOpen} onClose={handlePopupClose} />
        </div>
        </CurrentUserContext.Provider>
        </Fragment>
        
    );

}

export default App;
