import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
    this.searchTrack = this.searchTrack.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  searchTrack() {
    this.props.onSearch(this.state.search);
  }
  
  handleSearchChange({target}) {
    this.setState({search: target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleSearchChange}/>
        <button className="SearchButton" onClick={this.searchTrack}>SEARCH</button>
      </div>
    );
  }
}

