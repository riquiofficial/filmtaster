import styled from "styled-components";
import { useState } from "react";
//redux
import { fetchSearch } from "../actions/filmActions";
import { useDispatch } from "react-redux";
import apiLogo from "../img/tmdb.svg";

const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  return (
    <StyledNav>
      <h2>FilmTaster</h2>

      <form className="search">
        <input value={textInput} type="text" onChange={inputHandler} />
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
        <p>
          Powered by: <img src={apiLogo} alt="tmdb logo" />
        </p>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #42b6db;
    color: white;
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
    }
    &:active {
      transform: translateY(0px);
      box-shadow: 2px 1px 5px rgba(0, 0, 0, 0.2);
    }
  }
  img {
    width: 70px;
    height: 50px;
    display: inline;
    padding-top: 40px;
  }
`;

export default Nav;
