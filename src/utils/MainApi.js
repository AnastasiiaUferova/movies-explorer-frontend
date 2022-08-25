class MainApi {
    constructor({ address}) {
        this._address = address;
    }

    _handleResponse = (response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Error: ${response.status}`);
    }

    getSavedMovies() {
        return fetch(this._address + "/movies", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
                'Accept': 'application/json',
            },
        })
            .then(this._handleResponse);
    }

    addSavedMovie(data) {
        return fetch(this._address + "/movies", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                country: data.country, 
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: data.image,
                trailerLink: data.trailerLink,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
                thumbnail: data.thumbnail,
                movieId: data.movieId,
            }),
        })
            .then(this._handleResponse)
    }

    getUserInfo () {
        return fetch(`${this._address}/users/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
        })
        .then(this._handleResponse);
    }

    changeUserInfo (data) {
        return fetch(`${this._address}/users/me`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
        })
    })
    .then(this._handleResponse);
    
    }


    deleteCard(movieID) {
        return fetch (`${this._address}/movies/${movieID}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
    })
        .then(this._handleResponse);
    }


    }
    

const mainApi = new MainApi({
    address: 'https://movie-explorer.api.nomoredomains.xyz',
});

export default mainApi


