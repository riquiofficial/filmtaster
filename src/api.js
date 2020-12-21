const baseUrl = `https://api.themoviedb.org/3/movie/`;
const apiKey = process.env.REACT_APP_API_KEY;

export const popularFilmsUrl = `${baseUrl}popular?api_key=${apiKey}&language=en-US&page=1`;

export const searchFilmsUrl = (film_name) => {
  film_name = film_name.replace(/\s+/g, "+").toLowerCase();
  return `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${film_name}`;
};

export const movieDetail = (id) => `${baseUrl}${id}?api_key=${apiKey}`;

export const movieImage = (poster_path) =>
  `https://image.tmdb.org/t/p/w500${poster_path}`;
