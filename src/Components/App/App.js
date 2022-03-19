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
        },
        {
          name: 'Around The World',
          artist: 'Daft Punk',
          album: 'Homework',
          id: 2
        },
        {
          name: 'The Veldt',
          artist: 'Deadmau5',
          album: 'The Veldt EP',
          id: 3
        }
      ],
      playListName: 'newPlayList',
      playListTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
  }

  addTrack(track) {
    const tracks = this.state.playListTracks;
    const findResult = tracks.find(savedTrack => {
      return savedTrack.id === track.id;
    });
    if (!findResult) {
      tracks.push(track);
      this.setState({playListTracks:tracks});
    }
  }

  removeTrack(track) {
    const tracks = this.state.playListTracks;
    const trackIndex = tracks.indexOf(track);
    tracks.splice(trackIndex, 1);
    this.setState({playListTracks: tracks});
  }

  updatePlayListName(name) {
    this.setState({playListName: name});
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
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <PlayList
              playListName={this.state.playListName}
              playListTracks={this.state.playListTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlayListName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
