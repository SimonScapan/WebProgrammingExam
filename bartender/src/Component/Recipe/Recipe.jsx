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

// useStyles ist hier quasi die .css mit Material hat man die Möglichkeit direkt in der .jsx das Styling vorzunehmen
const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute', 
    left: '35%', 
    top: '10%',
  },
}));

export default function Recipe(cockt) {
  const classes = useStyles();
  let input = cockt.match(cockt.state[cockt.aktiv].Ingredient);
  
  //Funktion, welche schaut, ob alle Ingredients, die benötigt sind auch vorhanden sind
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
  
  //folgend werden die drei Unterkomponenten miteinander verknüpft bzw. untereinander eingebunden
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