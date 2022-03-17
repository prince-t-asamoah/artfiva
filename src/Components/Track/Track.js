import React from "react";
import "./Track.css";

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRemoval: null };
  }

  renderAction() {
    this.setState({ isRemoval: true });
  }

  componentDidMount() {
    this.renderAction();
  }
  render() {
    const buttonAction = this.state.isRemoval ? '+' : '-';
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{/*track name will go here*/}Titanium</h3>
          <p>
            {/*track artist will go here | track album will go here*/}David
            Guetta | Nothing But The Beat
          </p>
        </div>
        <button className="Track-action">
          {/* + or - will go here */}
          {buttonAction}
        </button>
      </div>
    );
  }
}
