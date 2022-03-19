import React from "react";
import "./Track.css";

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack =  this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return  <button className="Track-action">-</button>;
    } else {
      return  <button className="Track-action" onClick={this.addTrack}>+</button>;
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }
  render() {
    const buttonAction = this.renderAction();
    const trackName = this.props.track.name;
    const trackArtist = this.props.track.artist;
    const trackAlbum = this.props.track.album;
    
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{trackName}</h3>
          <p>{trackArtist} | {trackAlbum}</p>
        </div>
        {buttonAction}
      </div>
    );
  }
}
