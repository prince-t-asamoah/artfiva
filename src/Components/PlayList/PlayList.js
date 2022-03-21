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
      <input name="playlist-name" defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
      <TrackList
        tracks={this.props.playListTracks}
        isRemoval={true}
        onRemove={this.props.onRemove}
      />
      <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
    </div>
    );
  };
}
