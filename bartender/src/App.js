/*
moje to do's:
- přidawki přidać
  - funkciju, kotriž mi jenož recepty pokaza, za kotrež mam přidawki
    - za to funkciju, kiž pisa wšitke přidawki, kiž su wuzwolene
    - hišće raz hladać, hač dyrbi checkbox być ... nječini wjele zmysła
- přehlad receptow
  - wšitke recepty pokazać, přidatnje hišće matching-rate za tym pisać
  - snadź rjadowanje lisćiny po rjadom kak jara so přidawki hodźa
  - jeli njeje match=100% dyrbi najprjedy hišće powěsć přindź, zo dyrbiš nakupować
    - pak jednoru powěsć abo z ok kneflom
- recept
  - nadpisma maja so hišće napisać
- powšitkownje
  - styling
*/

import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";

import Navigation from      './Component/Navigation/Navigation.jsx';

class App extends React.Component {
  state = {
    cocktails:
    [
      {id:0,match:0,Cocktail:"Apple Martini",Source:"'./pictures/Apple Martini.jpg'",Ingredient: ["Absolut Citron","Nordhäuser Saurer Apfel","Galliano","Midori"], Step: ["Alle Zutaten kurz kräftig shaken","Drink in eine Cocktailschale abseihen","Mit einer Apfelspalte (Granny Smith) dekorieren"]},
      {id:1,match:0,Cocktail:"Bombay Crushed",Source:"'./pictures/Bombay Crushed.jpg'", Ingredient: ["Bombay Sapphire Gin","Limettensaft","Zuckersirup","Kumquats"], Step: ["Glas zur Hälfte mit Crushed Ice füllen","Kumquats halbieren und ins Glas geben","Schale leicht quetschen","Bombay und Limettensaft und Zuckersirup hinzugeben","Umrühren und mit Crushed Ice auffüllen","Mit einem Strohhalm servieren"]},
      {id:2,match:0,Cocktail:"Caipirinha",Source:"'./pictures/Caipirinha.jpg'", Ingredient: ["Cachaca","Weißer Rohrzucker","Limette"], Step: ["Limette heiß abwaschen und auf einem Tisch rollen oder durchkneten","Die Enden abschneiden und die Limette blätterförmig in Scheiben schneiden","Limette in ein stabiles Caipirinha-Glas geben","Zucker dazugeben","Mit einem Stößel gut stampfen","Cachaca darauf geben","Das Glas mit Crushed Ice auffüllen","Alles umrühren","Mit kurzem Strohhalm servieren"]},
      {id:3,match:0,Cocktail:"Cosmopolitan",Source:"'./pictures/Cosmopolitan.jpg'", Ingredient: ["Absolut Citron","Cointreau","Limettensaft","Cranberrysaft"], Step:["Zutaten mit Eiswürfeln kurz aber kräftig shaken","In eine Cocktailschale abseihen"] },
      {id:4,match:0,Cocktail:"El Diablo",Source:"'./pictures/El Diablo.jpg'", Ingredient: ["Sauza Hornitos","Limettensaft","Cassissee","Ginger Ale"], Step:["Tequila und Limettensaft und Cassissee zusammen mit ein paar Eiswürfeln in ein Longdrinkglas geben","Kurz umrühren und mit eiskaltem Ginger Ale auffüllen","Mit Limettenscheibe dekorieren"]},
      {id:5,match:0,Cocktail:"Gin Fizz",Source:"'./pictures/Gin Fizz.jpg'", Ingredient: ["Gordon's London Dry Gin","Zitronensaft","Zuckersirup","Soda"], Step:["Eiswürfel mit Gin und Zitronensaft und Zuckersirup in den Shaker geben","Shaker in ein Küchentuch (Baumwolltuch) einwickeln","Kräftig und lange shaken","In ein mit trockenen Eiswürfeln gefülltes Longdrinkglas abseihen","Mit kaltem Soda auffüllen","Vorsichtig einmal umrühren"] },
      {id:6,match:0,Cocktail:"Long Beach Iced Tea",Source:"./pictures/Long Beach Iced Tea.jpg", Ingredient: ["Wodka","Gordon's London Dry Gin","Midori","Mount Gay Premium White Rum","Triple Sec","Cranberrysaft"], Step:["Alle Zutaten kurz und kräftig shaken","In ein Longdrinkglas mit Crushed Ice abseihen"] },
      {id:7,match:0,Cocktail:"Mai Tai",Source:"./pictures/Mai Tai.jpg", Ingredient: ["Myer's Rum","Mount Gay Premium White Rum","Bols Curacao Red","Zitronensaft","Limettensaft","Zuckersirup"], Step:["Mit Eiswürfeln shaken","In ein Tropical-Glas abseihen","Mit Orangenscheibe und Minze und Cocktailkirsche garnieren"] },
      {id:8,match:0,Cocktail:"Margarita",Source:"./pictures/Margarita.jpg", Ingredient: ["Sauza Hornitos","Cointreau","Zitronensaft"], Step:["Eiswürfel und Tequila und Cointreau und Zitronensaft in den Shaker geben","Kurz und kräftig shaken","In ein Cocktailglas mit Salzrand abseihen"] },
      {id:9,match:0,Cocktail:"Martini Dry",Source:"./pictures/Martini Dry.jpg", Ingredient: ["Bombay Sapphire","Noilly Prat","Oliven"], Step:["Rührglas mit kalten trockenen Eiswürfeln füllen","Gekühlten Noilly Prat und Bombay Sapphire dazu geben","Mit einem Barlöffel von unten nach oben kräftig rühren","If the ice and the gin are moving at the same speed you are not succeeding - P. Harrington","In ein gut vorgekühltes Cocktailglas abseihen und Oliven ins Glas geben","Evtl. zusätzliche Oliven in einer extra Schale reichen"] },
      {id:10,match:0,Cocktail:"Singapore Sling",Source:"./pictures/Singapore Sling.jpg", Ingredient: ["Cherry Heering","Gordon's London Dry Gin","Zitronensaft","Zucker","Benedictine"], Step:["Alle Zutaten außer Benedictine mit viel Crushed Ice kurz shaken","Nicht abseihen","Sondern den ganzen Shaker-Inhalt in ein Glas geben","Benedictine aufschwimmen lassen","Mit einer Cocktailkirsche dekorieren"] },
      {id:11,match:0,Cocktail:"Swimmingpool",Source:"./pictures/Swimmingpool.jpg", Ingredient: ["Mount Gay Premium White Rum","Wodka","Sahne","Cream of Coconut","Ananassaft"], Step:["Alle Zutaten mit Crushed Ice kräftig shaken","Den Shaker dabei am besten in ein Tuch einwickeln","In ein mit Crushed Ice gefülltes Tropical Glas abseihen","Curacao Blue darübergeben und mit Cocktailkirsche und Ananas dekorieren"] },
      {id:12,match:0,Cocktail:"Whisky Sour",Source:"./pictures/Whisky Sour.jpg", Ingredient: ["Crown Royal","Zitronensaft","Zuckersirup"], Step:["Mit Eiswürfeln shaken und in ein Sour-Glas oder einen kleinen Tumbler abseihen","Mit einer Cocktailkirsche mit Stiel dekorieren"] },
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
    ],
    activerecipe:0,
    activeingredient:[],
  }

  addIngredientToState = (ingredient) => {
    this.setState({ingredients:this.state.ingredients.push({Ingredient: ingredient, selected: false})});
  }

  changeActiveRecipe = (id)=>{
    this.setState({activerecipe:id})
  }

  match = ()=>{
    let ingre = [];
    this.state.ingredients.map((value) => {ingre.push(value.Ingredient)});
    let point;
 
    this.state.cocktails.forEach((element) => {
      point = element.Ingredient == ingre;
      console.log(point);
    });
  
    this.state.cocktails.forEach((element)=>{
      var match = ingre.includes(this.state.cocktails[element.id].Ingredient);
      //this.setState({cocktails[element.id].match:match})
      console.log(this.state.cocktails[element.id].Ingredient);
      console.log(ingre);
      console.log(match);
    });  
  }


  
  componentDidMount() {
    this.match();
  }
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation 
            state={this.state}
            addIngredient={this.addIngredientToState}
            changeActive={this.changeActiveRecipe}
            match={this.match}  
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;




