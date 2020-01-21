import React, { Component } from 'react';
import './Ingredients.css';
import Ingredient from './Ingredient/Ingredient.jsx.js';



class Ingredients extends Component {
  render() {
    return (
      <div className="Ingredients">
        <Ingredient />
      </div>
    );
  }
}

export default Ingredients;