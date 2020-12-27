import { useEffect } from "react";
import styled from "styled-components";
//redux
import { loadFilms } from "../actions/filmActions";
import { useSelector, useDispatch } from "react-redux";
//components
import Film from "../components/Film";
import FilmDetail from "../components/FilmDetail";
//api
import { movieImage } from "../api";
//media
import defaultImage from "../img/default.jpg";
//router
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  //fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFilms());
  }, [dispatch]);
  //get data
  const { popular, searched } = useSelector((state) => state.films);
  const pathId = location.pathname.split("/")[2];

  return (
    <FilmList>
      {pathId && <FilmDetail pathId={pathId} />}
      {searched.length ? (
        <div className="searched">
          <h2>Searched Films</h2>
          <Films>
            {searched.map((film) =>
              film.backdrop_path ? (
                <Film
                  name={film.title}
                  released={film.release_date}
                  image={
                    film.backdrop_path
                      ? movieImage(film.backdrop_path)
                      : defaultImage
                  }
                  vote={film.vote_average}
                  id={film.id}
                  key={film.id}
                />
              ) : (
                ""
              )
            )}
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
            image={
              film.backdrop_path ? movieImage(film.backdrop_path) : defaultImage
            }
            vote={film.vote_average}
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
  @media screen and (max-width: 700px) {
    padding: 0 1rem;
  }
  h2 {
    margin: 1rem 1rem;
    padding: 0;
  }
`;

const Films = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export default Home;
