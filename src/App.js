//styles and animations
import GlobalStyles from "./components/GlobalStyles";
//components
import Nav from "./components/Nav";
import Home from "./pages/Home";
//router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
