import React from 'react';
import './Overview.css';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";

export default function Overview(props) {  
  let content=[];
  console.log(props.state);

  Object.values(props.state).forEach(element=>{
  console.log(element);

    let img = require('../pictures/'+element.Cocktail+'.jpg');
    console.log(img);

    content.push(
      <table className="contentTable">
      
        <ListItem button alignItems="flex-start" component={Link} to={'/Recipe'} onClick={() => props.aktiv(element.id)} >
          <ListItemAvatar >
            <Avatar alt="Beispielbild" src={img} />
          </ListItemAvatar>
          <ListItemText primary={element.Cocktail} />
        </ListItem>
     
      </table>
    )
  } );

  console.log(content);
  return (
    <form>
      <div>
        <h1>Passende Coktail-Rezepte</h1>
        {content}
      </div>
    </form>
  );
}

