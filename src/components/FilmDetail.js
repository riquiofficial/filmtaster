import styled from "styled-components";
//images
import { movieImage } from "../api";
//router
import { useHistory } from "react-router-dom";
//redux
import { useSelector } from "react-redux";

const FilmDetail = ({ pathId }) => {
  const history = useHistory();

  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      history.push("/");
    }
  };

  const { film, isLoading } = useSelector((state) => state.details);
  console.log(film);
  console.log(isLoading);
  const getRevenue = (revenue) => {
    return revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHander}>
          <Detail>
            <Stats>
              <div className="rating">
                <h3>{film.title}</h3>
                <p>Rating: {film.vote_average}/10</p>
                <p>{film.tagline ? `"${film.tagline}"` : null}</p>
                <p>Release Date: {film.release_date},</p>
                <p>
                  {film.revenue
                    ? `Revenue: $${getRevenue(film.revenue)}`
                    : null}
                </p>
              </div>
            </Stats>

            <div className="trailer">
              {film.videos ? (
                <iframe
                  className="gallery_movie"
                  allowFullScreen="allowfullscreen"
                  key={film.videos.results[0].id}
                  title={film.videos.results[0].name}
                  src={`https://www.youtube.com/embed/${film.videos.results[0].key}`}
                />
              ) : (
                ""
              )}
            </div>

            <Description>
              <p>{film.overview}</p>
            </Description>
            <Gallery>
              {film.images
                ? film.images.backdrops.map((screen) => (
                    <img
                      className="gallery_image"
                      src={movieImage(screen.file_path)}
                      key={screen.file_path}
                      alt={screen}
                    />
                  ))
                : ""}
            </Gallery>
            <Media>
              <img
                className="main_image"
                src={film.backdrop_path ? movieImage(film.poster_path) : null}
                alt={film.background_image}
              />
            </Media>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #42b6db;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled.div`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  .main_image {
    width: 60%;
  }
  .gallery_movie {
    margin-top: 3rem;
    width: 100%;
    height: 70vh;
  }
  @media screen and (max-width: 700px) {
    padding: 0.5rem;
    .gallery_movie {
      height: 15rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Gallery = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column-wrap;
  overflow: scroll;
  .gallery_image {
    width: 40%;
    flex: 1 0 auto;
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Media = styled.div`
  margin-top: 3rem;
  align-items: center;
  justify-content: center;
  display: flex;
  img {
    width: 50%;
  }
`;

const Description = styled.div`
  margin: 3rem 0rem;
`;

export default FilmDetail;
