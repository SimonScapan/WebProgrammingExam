import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';

export default function Step(props) {
    let ste=[];
    let input = props.state.Step;

    //hier analog zu Ingredient iteration über die Steps, die mit dem Cocktail übergeben werden
    //zusätzlich noch eine Checkbox, die keine Funktion in dem Sinne hat, dass sie Daten handled
    Object.values(input).map((step)=>{
        ste.push(
        <table>
            <td>
                <p>{step}</p> 
            </td>
            <td>
                <Checkbox />
            </td>
        </table>
        )
    });

    return (
        <form >
            <table>
                {ste}
            </table>
        </form>

  );
}