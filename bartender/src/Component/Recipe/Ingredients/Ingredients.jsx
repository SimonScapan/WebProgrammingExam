import React, { Component } from 'react';
import './Ingredients.css';
import Ingredient from './Ingredient/Ingredient.jsx';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));


class Ingredients extends Component{
    render(){
        return (
            <List className='Ingredients'>
                <ListItem alignItems="flex-start" >
                <Ingredient />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" >
                <Ingredient />
                </ListItem>
            </List>
            );
    }
}

export default Ingredients;