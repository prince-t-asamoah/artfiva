import React from "react";
import "./App.css";

import { SearchBar } from "../SearchBar/SearchBar.js";
import { SearchResults } from "../SearchResults/SearchResults.js";
import { PlayList } from "../PlayList/PlayList.js";

import Spotify from "../../Utility/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults : [],
      playListName: 'New Playlist',
      playListTracks: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.searchTrack = this.searchTrack.bind(this);
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

  searchTrack(term) {
    Spotify.searchTrack(term).then(trackSearch => {
      this.setState({searchResults: trackSearch});
    });
  }

  savePlayList() {
    const tracksUris = this.state.playListTracks.map(track => track.uri);
    Spotify.savePlayList(this.state.playListName, tracksUris).then(()=> {
      this.setState({
        playListName: 'New Playlist',
        playListTracks: []
      })
    })
  }

  render() {
    return (
      <div>
        <h1>
          Art<span className="highlight">fi</span>va
        </h1>
        <div className="App">
          <p className="Tagline">Create a memorable playlist for your favorite songs.</p>
          <SearchBar onSearch={this.searchTrack} />
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
              onSave={this.savePlayList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
