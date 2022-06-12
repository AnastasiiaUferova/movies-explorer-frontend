class MoviesApi {
    constructor({ address }) {
        this._address = address;
    }

    _handleResponse = (response) => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(`Ошибка: ${response.status}`);
    }

    getMovies() {
        return fetch(`${this._address}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
        })
            .then(this._handleResponse);
    }


    changeFilmStatus(id, isLiked) {
        return fetch(`${this._address}/cards/${id}/likes`, {
            method: isLiked ? 'DELETE' : 'PUT',
            headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        })
            .then(this._handleResponse)
        }
    }
    

const moviesApi = new MoviesApi ({
    address: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi



// Authorization: `Bearer ${localStorage.getItem('jwt')}`,