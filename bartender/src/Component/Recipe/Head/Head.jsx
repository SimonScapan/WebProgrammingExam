import React from 'react';

export default function Head(props) {
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