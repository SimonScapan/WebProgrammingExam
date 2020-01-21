import React, { Component } from 'react';
import './RecipeOverview.css';



class RecipeOverview extends Component {
  constructor(props){
    super(props)
    this.state={props}
  }
  render() {
    return (
      <div className="RecipeOverview">
        <p>Hallo</p>
      </div>
    );
  }
}

export default RecipeOverview;


