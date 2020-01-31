import React from 'react';
import { Link, Route,Switch} from 'react-router-dom';
import Insert from          '../Insert/Insert.jsx';
import Overview from  '../Overview/Overview.jsx';
import Recipe from          '../Recipe/Recipe.jsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const classes = makeStyles(theme => ({
    root: {
      position: 'absolute', 
      left: '8000%', 
      top: '10%',
    },
  }));


class Navigation extends React.Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="h3">Bartender</Typography>
                    <Typography variant="h8">© by SorbTech</Typography>
                    <ButtonGroup className={classes.root} variant="text" >
                        <Button component={Link} to={'/Insert'}>Zutaten hinzufügen</Button> 
                        <Button component={Link} to={'/Overview'}>Rezeptübersicht</Button>
                        <Button component={Link} to={'/Recipe'}>Rezept</Button>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>

              <Switch>
                <Route path="/Insert" render={() => <Insert state={this.props.state.ingredients} handleChange={this.props.handleChange}/>} exact />
                <Route path="/Overview" render={() => <Overview state={this.props.state.cocktails} aktiv={this.props.changeActive}  />} exact />
                <Route path="/Recipe" render={() => <Recipe state={this.props.state.cocktails} aktiv={this.props.state.activerecipe} match={this.props.match} />} exact />
              </Switch>
            </div>
        );
    }

}
export default Navigation;