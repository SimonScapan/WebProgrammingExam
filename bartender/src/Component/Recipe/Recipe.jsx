import React, { Component } from 'react';
import './Recipe.css';
import RecipeHead from './RecipeHead/RecipeHead.jsx.js';
import Ingredients from './Ingredients/Ingredients.jsx.js';
import Preparation from './Preparation/Preparation.jsx.js';


class Recipe extends Component {
  render() {
    return (
      <div className="Recipe">
        <RecipeHead />
        <Ingredients />
        <Preparation />
      </div>
    );
  }
}

export default Recipe;