const key = process.env.REACT_APP_API_KEY;
const baseUrl = `https://api.themoviedb.org/3/movie/`;

const popular = `${baseUrl}popular?api_key=${key}&language=en-US&page=1`;
