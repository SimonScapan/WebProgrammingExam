import React, { Component } from 'react';
import './Router.css';
import Insert from './Insert/Insert.jsx';
import RecipeOverview from './RecipeOverview/RecipeOverview.jsx';
import Recipe from './Recipe/Recipe.jsx';


class Router extends Component {
  render() {
    return (
      <div className="AppRouter">
        {/*<Insert />*/}
        <RecipeOverview />
        <Recipe />
      </div>
    );
  }
}

export default Router;