# React.js 'MOVIES EXPLORER' frontend. Diploma project for [Yandex.Practicum](https://practicum.com)

## Description

Frontend of a diploma project for Yandex Praktikum. This project is a multi-page website with a simple landing on the main page (with project description), login and registration, movies search, filter and save functionality availible for authorized users. This is a React.js-based project.

## Functionality

### Unauthorized user can:

* Look through static landing main page;
* Register using username and email;
* Log in after the registration;

### Authorized user can:

 * Edit their username and email;
*  Search for movies in the database after entering the keyword in the search panel;
*  Filter movies according to their length (filter short movies);
*  Save favorite movies in favorites;
*  Delete movies from favorites;
*  Change user information (name, email) in the profile page

### API used

* external API provided by Yandex in collaboration with Beat Film Festival - database with documentaries (a user will search for movies from this DB)
* backend part of the service written in Express.js and used for user registration, athorization, saving movies in favorites, changing user information ([check out the backend of the project](https://github.com/AnastasiiaUferova/movies-explorer-api)).

### Layout features

* Layout is created according to individual Figma template
* Element positioning using grids and flexbox
* Adaptive design principles are used in the project: it's optimized for different screen resolutions (mobile, tablet, desktop)
* The number of displayed cards varies according to the screen size. If search result consists of multiple movies, initial amount of them will be displayed right away, more can be opened when clicking on "more" button.
* The page with movies is empty until a user carries out the first search. 

### Routes
* ```/ ```— main page
* ```/movies``` — movies library
* ```/saved-movies``` — library with favorite movies
* ```/profile``` — user profile
* ```/signin & /signup``` — pages of registration and authorization
* ```/*``` — 404 page

## Technologies used

* React.js Functional Components;
* React routing;
* Hooks (useState, useEffect, useCallBack, useDebouncedCallback, custom hooks);
* Adaptive layout using flexbox and grid positioning;
* Nested file structure according to BEM methodology;
* JavaScript (Asynchronous JS, Fetch API, OOP);
* Git;
* Webpack;
* Figma


## Installation instructions:

```
git clone https://github.com/AnastasiiaUferova/movies-explorer-frontend.git

cd movies-explorer-frontend

npm install 

npm run build

npm run start
```
