import React, { Component } from 'react';
import './App.css';
import {Router,Route,Switch} from "react-router-dom";

import Navigation from      './Component/Navigation/Navigation.jsx';
import Insert from          './Component/Insert/Insert.jsx.js';
import RecipeOverview from  './Component/RecipeOverview/RecipeOverview.jsx.js';
import Recipe from          './Component/Recipe/Recipe.jsx.js';

class App extends Component {
  state = {
    cocktails:
    [
      {Cocktial:"Apple Martini", Ingredient: ["Absolut Citron","Nordhäuser Saurer Apfel","Galliano","Midori"], Step: ["Alle Zutaten kurz kräftig shaken","Drink in eine Cocktailschale abseihen","Mit einer Apfelspalte (Granny Smith) dekorieren"]},
      {Cocktail:"Bombay Crushed", Ingredient: ["Bombay Sapphire Gin","Limettensaft","Zuckersirup","Kumquats"], Step: ["Glas zur Hälfte mit Crushed Ice füllen","Kumquats halbieren und ins Glas geben","Schale leicht quetschen","Bombay und Limettensaft und Zuckersirup hinzugeben","Umrühren und mit Crushed Ice auffüllen","Mit einem Strohhalm servieren"]},
      {Cocktail:"Caipirinha", Ingredient: ["Cachaca","Weißer Rohrzucker","Limette"], Step: ["Limette heiß abwaschen und auf einem Tisch rollen oder durchkneten","Die Enden abschneiden und die Limette blätterförmig in Scheiben schneiden","Limette in ein stabiles Caipirinha-Glas geben","Zucker dazugeben","Mit einem Stößel gut stampfen","Cachaca darauf geben","Das Glas mit Crushed Ice auffüllen","Alles umrühren","Mit kurzem Strohhalm servieren"]},
      {Cocktail:"Cosmopolitan", Ingredient: ["Absolut Citron","Cointreau","Limettensaft","Cranberrysaft"], Step:["Zutaten mit Eiswürfeln kurz aber kräftig shaken","In eine Cocktailschale abseihen"] },
      {Cocktail:"El Diablo", Ingredient: ["Sauza Hornitos","Limettensaft","Cassissee","Ginger Ale"], Step:["Tequila und Limettensaft und Cassissee zusammen mit ein paar Eiswürfeln in ein Longdrinkglas geben","Kurz umrühren und mit eiskaltem Ginger Ale auffüllen","Mit Limettenscheibe dekorieren"]},
      {Cocktail:"Gin Fizz", Ingredient: ["Gordon's London Dry Gin","Zitronensaft","Zuckersirup","Soda"], Step:["Eiswürfel mit Gin und Zitronensaft und Zuckersirup in den Shaker geben","Shaker in ein Küchentuch (Baumwolltuch) einwickeln","Kräftig und lange shaken","In ein mit trockenen Eiswürfeln gefülltes Longdrinkglas abseihen","Mit kaltem Soda auffüllen","Vorsichtig einmal umrühren"] },
      {Cocktail:"Long Beach Iced Tea", Ingredient: ["Wodka","Gordon's London Dry Gin","Midori","Mount Gay Premium White Rum","Triple Sec","Cranberrysaft"], Step:["Alle Zutaten kurz und kräftig shaken","In ein Longdrinkglas mit Crushed Ice abseihen"] },
      {Cocktail:"Mai Tai", Ingredient: ["Myer's Rum","Mount Gay Premium White Rum","Bols Curacao Red","Zitronensaft","Limettensaft","Zuckersirup"], Step:["Mit Eiswürfeln shaken","In ein Tropical-Glas abseihen","Mit Orangenscheibe und Minze und Cocktailkirsche garnieren"] },
      {Cocktail:"Margarita", Ingredient: ["Sauza Hornitos","Cointreau","Zitronensaft"], Step:["Eiswürfel und Tequila und Cointreau und Zitronensaft in den Shaker geben","Kurz und kräftig shaken","In ein Cocktailglas mit Salzrand abseihen"] },
      {Cocktail:"Martini Dry", Ingredient: ["Bombay Sapphire","Noilly Prat","Oliven"], Step:["Rührglas mit kalten trockenen Eiswürfeln füllen","Gekühlten Noilly Prat und Bombay Sapphire dazu geben","Mit einem Barlöffel von unten nach oben kräftig rühren","If the ice and the gin are moving at the same speed you are not succeeding - P. Harrington","In ein gut vorgekühltes Cocktailglas abseihen und Oliven ins Glas geben","Evtl. zusätzliche Oliven in einer extra Schale reichen"] },
      {Cocktail:"Singapore Sling", Ingredient: ["Cherry Heering","Gordon's London Dry Gin","Zitronensaft","Zucker","Benedictine"], Step:["Alle Zutaten außer Benedictine mit viel Crushed Ice kurz shaken","Nicht abseihen","Sondern den ganzen Shaker-Inhalt in ein Glas geben","Benedictine aufschwimmen lassen","Mit einer Cocktailkirsche dekorieren"] },
      {Cocktail:"Swimmingpool", Ingredient: ["Mount Gay Premium White Rum","Wodka","Sahne","Cream of Coconut","Ananassaft"], Step:["Alle Zutaten mit Crushed Ice kräftig shaken","Den Shaker dabei am besten in ein Tuch einwickeln","In ein mit Crushed Ice gefülltes Tropical Glas abseihen","Curacao Blue darübergeben und mit Cocktailkirsche und Ananas dekorieren"] },
      {Cocktail:"Whisky Sour", Ingredient: ["Crown Royal","Zitronensaft","Zuckersirup"], Step:["Mit Eiswürfeln shaken und in ein Sour-Glas oder einen kleinen Tumbler abseihen","Mit einer Cocktailkirsche mit Stiel dekorieren"] },
    ],
    ingredients:
    [
      {Ingredient:"Absolut Citron", selected:true},
      {Ingredient:"Nordhäuser Saurer Apfel", selected:true},
      {Ingredient:"Galliano", selected:true},
      {Ingredient:"Midori", selected:true},
      {Ingredient:"Bombay Sapphire Gin", selected:true},
      {Ingredient:"Limettensaft", selected:true},
      {Ingredient:"Zuckersirup", selected:true},
      {Ingredient:"Kumquats", selected:true},
      {Ingredient:"Cachaca", selected:true},
      {Ingredient:"Weißer Rohrzucker", selected:true},
      {Ingredient:"Limette", selected:true},
      {Ingredient:"Cointreau", selected:true},
      {Ingredient:"Cranberrysaft", selected:true},
      {Ingredient:"Sauza Hornitos", selected:true},
      {Ingredient:"Cassissee", selected:true},
      {Ingredient:"Ginger Ale", selected:true},
      {Ingredient:"Gordon's London Dry Gin", selected:true},
      {Ingredient:"Zitronensaft", selected:true},
      {Ingredient:"Soda", selected:true},
      {Ingredient:"Wodka", selected:true},
      {Ingredient:"Mount Gay Premium White Rum", selected:true},
      {Ingredient:"Triple Sec", selected:true},
      {Ingredient:"Myer's Rum", selected:true},
      {Ingredient:"Bols Curacao Red", selected:true},
      {Ingredient:"Noilly Prat", selected:true},
      {Ingredient:"Oliven", selected:true},
      {Ingredient:"Cherry Heering", selected:true},
      {Ingredient:"Zucker", selected:true},
      {Ingredient:"Benedictine", selected:true},
      {Ingredient:"Sahne", selected:true},
      {Ingredient:"Cream of Coconut", selected:true},
      {Ingredient:"Ananassaft", selected:true},
      {Ingredient:"Crown Royal", selected:true},
    ]
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Router>
          <Navigation />
          <Switch>
            <Route path="/Insert" render={() => <Insert {...this.state}/>} exact />
            <Route path="/Overview" render={() => <RecipeOverview {...this.state}/>}  exact />
            <Route path="/Recipe" render={() => <Recipe {...this.state}/>} exact />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;




