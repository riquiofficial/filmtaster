import { useEffect } from "react";
import styled from "styled-components";
//redux
import { loadFilms } from "../actions/filmActions";
import { useSelector, useDispatch } from "react-redux";
//components
import Film from "../components/Film";
//api
import { movieImage } from "../api";
//media
import defaultImage from "../img/default.jpg";

const Home = () => {
  //fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFilms());
  }, [dispatch]);
  //get data
  const { popular, searched } = useSelector((state) => state.films);

  return (
    <FilmList>
      {searched.length ? (
        <div className="searched">
          <h2>Searched Films</h2>
          <Films>
            {searched.map((film) => (
              <Film
                name={film.title}
                released={film.release_date}
                image={
                  film.backdrop_path
                    ? movieImage(film.backdrop_path)
                    : defaultImage
                }
                id={film.id}
                key={film.id}
              />
            ))}
            ;
          </Films>
        </div>
      ) : (
        ""
      )}

      <h2>Popular</h2>
      <Films>
        {popular.map((film) => (
          <Film
            name={film.title}
            released={film.release_date}
            image={movieImage(film.backdrop_path)}
            id={film.id}
            key={film.id}
          />
        ))}
      </Films>
    </FilmList>
  );
};

const FilmList = styled.div`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Films = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
