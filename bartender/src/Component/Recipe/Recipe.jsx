import React from 'react';
import Ingredient from './Ingredient/Ingredient.jsx'
import Step from './Step/Step.jsx'
import Head from './Head/Head.jsx'

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute', 
    left: '35%', 
    top: '10%',
  },
}));

export default function Recipe(cockt) {
  const classes = useStyles();
  console.log(cockt);
  console.log(cockt.match(cockt.state[cockt.aktiv].Ingredient));
  let input = cockt.match(cockt.state[cockt.aktiv].Ingredient);
  console.log(input);
  
  let match = () => {
    if (input==true){
    return(
      <Dialog open={input}>
          <DialogTitle >
            Einkaufswarnung
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Leider sind nicht alle Zutaten Enthalten. Sie können diese aber noch nachkaufen.
              Sind Sie damit einverstanden?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus color="primary">
              Ja, weiter
            </Button>
          </DialogActions>
        </Dialog>
    )}
  };
  
  
  return (
    <table className={classes.root}>
      <tr>
        <td>
          <Head state={cockt.state[cockt.aktiv]}/>
        </td>
      </tr>
      <tr>
        <td>
          <h2>Folgende Zutaten werden benötigt: </h2>
          <Ingredient state={cockt.state[cockt.aktiv]}/>
        </td>
      </tr>
      <tr>
        <td>
          <h2>Und so wirds gemacht:  </h2>
          <Step state={cockt.state[cockt.aktiv]} />
          </td>
      </tr>
    </table>
  );
}