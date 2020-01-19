import React, { Component } from 'react';
import './Preparation.css';
import Step from './Step/Step.jsx';



class Preparation extends Component {
  render() {
    return (
      <div className="Preparation">
        <h3>Zubereitungsschritte: </h3>
        <Step />
      </div>
    );
  }
}

export default Preparation;