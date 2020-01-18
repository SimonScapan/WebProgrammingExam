import React, { Component } from 'react';
import './Recipe.css';
import RecipeHead from './RecipeHead/RecipeHead.jsx';
import Ingredients from './Ingredients/Ingredients.jsx';
import Preparation from './Preparation/Preparation.jsx';


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