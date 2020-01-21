import React, { Component } from 'react';
import './Insert.css';
import AddIngredient from './AddIngredient/AddIngredient.jsx.js';
import Ingredients from './Ingredients/Ingredients.jsx.js';


class Insert extends Component {
  render() {
    return (
      <div className="Insert">
        <AddIngredient />
        <Ingredients />
      </div>
    );
  }
}

export default Insert;