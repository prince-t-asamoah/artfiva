import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.searchTrack = this.searchTrack.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  searchTrack() {
    this.props.onSearch(this.state.search);
  }

  handleSearchChange(e) {
    this.setState({search: e.target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

