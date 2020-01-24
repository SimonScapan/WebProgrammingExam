import React from 'react';



export default function Head(props) {
    console.log(props.state.Cocktail);
    let imag = require('../../pictures/'+props.state.Cocktail+'.jpg');

    return (
        <form >
            <table>
                <img src={imag} />
                <h1>{props.state.Cocktail}</h1>
            </table>
        </form>
    );
}