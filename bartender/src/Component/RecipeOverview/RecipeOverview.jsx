import React, { Component } from 'react';
import './RecipeOverview.css';
import Liste from './List/List.jsx.js';



class RecipeOverview extends Component {
  render() {
    return (
      <div className="RecipeOverview">
        <Liste />
      </div>
    );
  }
}

export default RecipeOverview;


