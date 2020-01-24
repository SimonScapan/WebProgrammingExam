import React from 'react';
import './Navigation.css';
import { Link, Route,Switch} from 'react-router-dom';
import Insert from          '../Insert/Insert.jsx';
import Overview from  '../Overview/Overview.jsx';
import Recipe from          '../Recipe/Recipe.jsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">Bartender</Typography>
                        <Button variant="contained" component={Link} to={'/Insert'}>Zutaten hinzufügen</Button> 
                        <Button variant="contained" component={Link} to={'/Overview'}>Rezeptübersicht</Button>
                        <Button variant="contained" component={Link} to={'/Recipe'}>Rezept</Button>
                    </Toolbar>
                </AppBar>

              <Switch>
                <Route path="/Insert" render={() => <Insert state={this.props.state.ingredients} insert={this.props.addIngredient} />} exact />
                <Route path="/Overview" render={() => <Overview state={this.props.state.cocktails} aktiv={this.props.changeActive} />} exact />
                <Route path="/Recipe" render={() => <Recipe state={this.props.state.cocktails} aktiv={this.props.state.activerecipe} />} exact />
              </Switch>
            </div>
        );
    }

}
export default Navigation;