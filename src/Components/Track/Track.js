import React from "react";
import "./Track.css";

export class Track extends React.Component {
  constructor(props) {
    super(props);
   this.addTrack = this.addTrack.bind(this);
  }

  addTrack () {
    this.props.onAdd(this.props.track);
  }
  render() {
    const buttonAction = this.props.isRemoval === true ? "-" : "+";
    const trackName = this.props.track.name;
    const trackArtist = this.props.track.artist;
    const trackAlbum = this.props.track.album;
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{trackName}</h3>
          <p>{trackArtist} | {trackAlbum}</p>
        </div>
        <button className="Track-action">{buttonAction}</button>
      </div>
    );
  }
}
