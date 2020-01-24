import React from 'react';
import './Recipe.css';
import Ingredient from './Ingredient/Ingredient.jsx'
import Step from './Step/Step.jsx'
import Head from './Head/Head.jsx'


export default function Recipe(cockt) {
  return (
    
    <table className="contentTable">
      <td>
          <Head state={cockt.state[cockt.aktiv]}/>
      </td>
      <td>
        <Ingredient state={cockt.state[cockt.aktiv]}/>
      </td>
      <td>
          <Step state={cockt.state[cockt.aktiv]} />
      </td>
    </table>
  );
}
