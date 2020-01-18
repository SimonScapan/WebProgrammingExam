import React, { Component } from 'react';
import './List.css';
import ListElement from './ListElement/ListElement.jsx';


class List extends Component {
  render() {
    return (
      <div className="List">
        <ListElement />
      </div>
    );
  }
}

export default List;