//styles and animations
import GlobalStyles from "./components/GlobalStyles";
//components
import Nav from "./components/Nav";
import Home from "./pages/Home";
//redux

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
