import React from 'react';
import './Navigation.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { getRecipe } from '../../databasehandler';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false }
    }

    componentWillMount() {
        let allReceipts = getRecipe()
        this.setState({ allReceipts: allReceipts })
    }

    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Bartender</Typography>
                    {/* die Buttons müssen noch auf die rechte Seite geschoben werden*/}
                    <Button color="inherit" href='/Insert'>Zutaten hinzufügen</Button> 
                    <Button color="inherit" href='/Overview'>Rezeptübersicht</Button>
                </Toolbar>
            </AppBar>
        );
    }

}
export default Navigation;
