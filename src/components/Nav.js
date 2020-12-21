import styled from "styled-components";
import { useState } from "react";
//redux
import { fetchSearch } from "../actions/filmActions";
import { useDispatch } from "react-redux";

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
    background: #ff7676;
    color: white;
  }
`;

export default Nav;
