import React, { Component } from 'react';
import './AddIngredient.css';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


export default function AddIngredient() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <p>Neue Zutaten hinzufügen: </p>
      <TextField id="buy-ingredient" label="Zutat" variant="outlined" />
      <Button>Kaufen</Button>
    </form>
  );
}