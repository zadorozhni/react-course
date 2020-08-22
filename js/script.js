"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

    if (a != null && b ! = null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        personalMovieDB.movies[c] = d;
    } else {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    }

    if(personalMovieDB.count < 10) {}


console.log(personalMovieDB);

if ()