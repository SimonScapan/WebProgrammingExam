import React from 'react';

export default function Ingredient(props) {
    let ingre=[];
    let input = props.state.Ingredient;

    // durchiterieren über alle ingredients eines Rezeptes und einfügen dieser in eine Liste
    Object.values(input).map((ingredient) =>
        ingre.push(
        <table>
            <td>
                    <p>{ingredient}</p> 
            </td>
        </table>
        )
    );

    return (
        <form>
        <table>
            {ingre}
        </table>
        </form>

  );
}