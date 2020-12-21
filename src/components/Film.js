import styled from "styled-components";
//redux
import { useDispatch } from "react-redux";

const Film = ({ name, released, image, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();

  return (
    <StyledGame>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={`poster for ${name}`} />
    </StyledGame>
  );
};

const StyledGame = styled.div`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;
export default Film;
