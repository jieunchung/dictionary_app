import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <h1>/find</h1>
          <h4>information on ...</h4>
          <p>Search a word to find out more</p>
        </div>
        <SearchForm />
      </div>
      <footer className="footer">
        <a
          href="https://github.com/jieunchung/dictionary_app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        <span> by Jieun Chung</span>
      </footer>
    </div>
  );
}

export default App;
