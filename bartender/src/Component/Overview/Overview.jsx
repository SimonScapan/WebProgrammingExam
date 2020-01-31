import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute', 
    left: '35%', 
    top: '10%',
  },
}));


export default function Overview(props) {  
  const classes = useStyles();
  let content=[];
  console.log(props.state);


  Object.values(props.state).forEach(element=>{
    let img = require('../pictures/'+element.Cocktail+'.jpg');
    content.push(
      <table className="contentTable">
      
        <ListItem button alignItems="flex-start" component={Link} to={'/Recipe'} onClick={() => {props.aktiv(element.id)}} >
          <ListItemAvatar >
            <Avatar alt="Beispielbild" src={img} />
          </ListItemAvatar>
          <ListItemText primary={element.Cocktail} />
        </ListItem>
      </table>
    )
  } );
  
  return (
    <form className={classes.root}>
      <div>
        <h1>Passende Coktail-Rezepte</h1>
        {content}
      </div>
    </form>
  );
}

