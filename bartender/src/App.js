import React, { Component } from 'react';
import './App.css';
import Navigation from './Component/Navigation/Navigation.jsx';
import Router from './Component/Router/Router.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;