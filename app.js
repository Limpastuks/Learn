const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмов', '');
const b = prompt('Дайте оценку фильму', '');
const c = prompt('Один из последних фильмов', '');
const d = prompt('Дайте оценку фильму', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);