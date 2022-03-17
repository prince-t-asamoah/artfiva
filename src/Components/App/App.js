import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar.js";
import { SearchResults } from "../SearchResults/SearchResults.js";
import { PlayList } from "../PlayList/PlayList.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : [
        {
          name: 'Titanium',
          artist: 'David Guetta',
          album: 'Nothing But The Beat',
          id: 1
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <PlayList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
