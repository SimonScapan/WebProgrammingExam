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


export default function Insert(props) {
  const classes = useStyles();

  let content=[];
  let ingre=0;
  let sele=0;

  console.log(props);

  props.map((Element) => (
    content.push(
      <tr>
        <td>
          {Element.Ingredient}
        </td>
        <td>
          <checkbox checked={Element.selected}/>
        </td>
      </tr>
    )
  ));

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <p>Neue Zutaten hinzufügen: </p>
        <TextField id="buy-ingredient" label="Zutat" variant="outlined" />
        <Button variant="contained">Kaufen</Button>
      </div>

      <div>
        <p>Vorhandene Zutaten:</p>
        <table>
          {content}
        </table>

      </div>
    </form>
  );
}