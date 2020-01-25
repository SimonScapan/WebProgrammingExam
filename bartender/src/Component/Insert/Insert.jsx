import React, { Component } from 'react';
import './Insert.css';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from "react-router-dom";

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

  Object.values(input.state).forEach(element=>{
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
        <h1>Vorhandene Zutaten:</h1>
        <Button variant="contained" component={Link} to={'/Overview'} onClick={() => input.match()}>
          Drinks anzeigen
        </Button>
        <table className="contentTable">
          {content}
        </table>
      </div>
    </form>
  );
}