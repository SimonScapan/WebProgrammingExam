import React, { Component } from 'react';
import './ListElement.css';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import logo from './pictures/malibubaybreeze.png';

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
  
  export default function ListElement() {
    const classes = useStyles();
  
    return (
        <ListItem alignItems="flex-start">
        <img src={logo} style={{width: 50, height: 50}} alt="Logo" />
        <ListItemText primary="Summer BBQ" />
        </ListItem>
      );
  }








