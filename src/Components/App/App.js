import "./App.css";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from '../SearchResults/SearchResults.js';

function App() {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults/>
          {/* <!-- Add a Playlist component --> */}
        </div>
      </div>
    </div>
  );
}

export default App;