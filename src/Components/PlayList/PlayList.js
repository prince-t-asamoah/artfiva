import React from 'react';
import './PlayList.css';
import { TrackList } from '../TrackList/TrackList';

export class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    let nameValue = e.target.value;
    this.props.onNameChange(nameValue);
  }

  render() {
    return (
      <div className="Playlist">
      <input name="playlist-name" defaultValue="New Playlist" />
      <TrackList
        tracks={this.props.playListTracks}
        isRemoval={true}
        onRemove={this.props.onRemove}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
    );
  };
}

