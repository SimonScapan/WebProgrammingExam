import React, { Component } from 'react';
import './Router.css';
import Insert from './Insert/Insert.jsx';
import RecipeOverview from './RecipeOverview/RecipeOverview.jsx';
import Recipe from './Recipe/Recipe.jsx';
//import { getRecipe } from '../../databasehandler';
import Navigation from "../Navigation/Navigation.jsx";
import {Route,Switch} from "react-router-dom";

function Router() {
    let allItems = ''//getRecipe()
  
    return (
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/Insert" render={() => <Insert {...allItems}/>} exact />
            <Route path="/Overview" render={() => <RecipeOverview {...allItems}/>}  exact />
            <Route path="/Recipe" render={() => <Recipe {...allItems}/>} exact />
          </Switch>
        </Router>
      </div>
    );
  }
  
  export default Router;