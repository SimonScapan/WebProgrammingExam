import React, { Component } from 'react';
import './Insert.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


export default function Insert(input) {
  const classes = useStyles();
  let content=[];

  console.log(input);


  Object.values(input).forEach(element=>{
    console.log(element)
    content.push(
      <tr>
        <td>
          {element.Ingredient}
        </td>
        <td>
          <Checkbox checked={element.selected}/>
        </td>
      </tr>
    )
  });

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <p>Neue Zutaten hinzufügen: </p>
        <TextField id="buy-ingredient" label="Zutat" variant="outlined" value={content.Insert} onChange={content.handleChange}/>
        <Button variant="contained">Kaufen</Button>
      </div>

      <div>
        <p>Vorhandene Zutaten:</p>
        <table className="contentTable">
          {content}
        </table>
      </div>

      <div>
        <Button variant="contained" href='/Overview'>Drinks anzeigen</Button>
      </div>
    </form>
  );
}