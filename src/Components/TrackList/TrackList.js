import React from "react";
import "./TrackList.css";
import { Track } from "../Track/Track.js";

export class TrackList extends React.Component {
  
  render() {
  const tracks = this.props.tracks.map(track => {
    return <Track
            track={track}
            key={track.id}
            isRemoval={this.props.isRemoval}
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
           />
  })
    return (
      <div className="TrackList">
        {tracks}
      </div>
    );
  }
}
