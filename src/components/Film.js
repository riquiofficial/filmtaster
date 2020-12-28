import styled from "styled-components";
//redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
//router
import { Link, useHistory } from "react-router-dom";

const Film = ({ name, released, image, vote, id }) => {
  // const stringPathId = id.toString();

  //fix scrolling bug
  const history = useHistory();
  if (history.location.pathname === "/") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  //load details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledFilm onClick={loadDetailHandler}>
      <Link to={`/film/${id}`}>
        <h3>{name}</h3>
        <p>{released.split("-").reverse().join("/")}</p>
        <p>Rating: {vote}/10</p>
        <img src={image} alt={`poster for ${name}`} />
      </Link>
    </StyledFilm>
  );
};

const StyledFilm = styled.div`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Film;
