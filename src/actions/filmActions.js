import axios from "axios";
import { popularFilmsUrl, searchFilmsUrl } from "../api";

//action creater
export const loadFilms = () => async (dispatch) => {
  //fetch data with axios
  const popularData = await axios.get(popularFilmsUrl);
  dispatch({
    type: "FETCH_FILMS",
    payload: {
      popular: popularData.data.results,
    },
  });
};

export const fetchSearch = (film_name) => async (dispatch) => {
  const searchGames = await axios.get(searchFilmsUrl(film_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
