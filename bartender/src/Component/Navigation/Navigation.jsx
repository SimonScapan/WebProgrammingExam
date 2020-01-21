import React from 'react';
import './Navigation.css';
import { Link, Route,Switch} from 'react-router-dom';
import Insert from          '../Insert/Insert.jsx';
import RecipeOverview from  '../RecipeOverview/RecipeOverview.jsx';
import Recipe from          '../Recipe/Recipe.jsx';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    Button: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }));

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = props;
        this.setState({isOpen: false});
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">Bartender</Typography>
                        
                        <Link to = '/Insert'>
                        <Button color="inherit" href='/Insert'>Zutaten hinzufügen</Button> 
                        </Link>

                        <Link to = '/Overview'>
                        <Button color="inherit" href='/Overview'>Rezeptübersicht</Button>
                        </Link>

                        <Link to = '/Recipe'>
                        <Button color="inherit" href='/Recipe'>Rezept</Button>
                        </Link>

                    </Toolbar>
                </AppBar>

              <Switch>
                <Route path="/Insert" render={() => <Insert {...this.state.ingredients}/>} exact />
                <Route path="/Overview" render={() => <RecipeOverview {...this.state.cocktail}/>} exact />
                <Route path="/Recipe" render={() => <Recipe {...this.state.cocktail}/>} exact />
              </Switch>
            </div>
        );
    }

}
export default Navigation;