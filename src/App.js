import { useEffect } from "react";
//styles and animations
import GlobalStyles from "./components/GlobalStyles";
//components
import Nav from "./components/Nav";
//redux
import { useDispatch } from "react-redux";
import { loadFilms } from "./actions/filmActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFilms());
  });
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
    </div>
  );
}

export default App;
