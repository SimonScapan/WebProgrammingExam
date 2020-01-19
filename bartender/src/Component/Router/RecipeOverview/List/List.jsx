import React, { Component } from 'react';
import './List.css';
import ListElement from './ListElement/ListElement.jsx';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';


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

  class Liste extends Component{
    render(){
        return (
            <List className='List'>
                <ListItem alignItems="flex-start" >
                <ListElement />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start" >
                <ListElement />
                </ListItem>
            </List>
        );
    }
}

export default Liste;