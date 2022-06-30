import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="heading">
              <h1>/Search</h1>
              <p>Look up a word to find out more</p>
            </div>
            <div className="form-container">
              <form className="form-group mx-sm-3 mb-2">
                <input
                  className="form-control form-input"
                  type="search"
                  placeholder="Search here"
                ></input>
                <small className="hints">e.g. summer, kitten, flower</small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
