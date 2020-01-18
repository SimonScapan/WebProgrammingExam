import React, { Component } from 'react';
import './RecipeOverview.css';
import Insert from './List/List.jsx';



class RecipeOverview extends Component {
  render() {
    return (
      <div className="RecipeOverview">
        <Insert />
      </div>
    );
  }
}

export default RecipeOverview;