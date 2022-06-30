import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>/find</h1>
          <p>Search a word to find out more</p>
        </div>
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
