import React from 'react';

export default function Head(props) {
    //laden des Bildes mit dem Namen des Cocktais aus dem Folder pictures
    let imag = require('../../pictures/'+props.state.Cocktail+'.jpg');
    return (
        <form >
            <table>
                {/* Namen des Cocktails und darunter das Bild einfügen */}
                <h1>{props.state.Cocktail}</h1>
                <img src={imag} />
            </table>
        </form>
    );
}