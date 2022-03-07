import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Login,
  Foods,
  Drinks,
  Explore,
  ExploreFoods,
  ExploreDrinks,
  FoodsIngredients,
  DrinksIngredients,
  Nationalities,
  Profile,
  Done,
  Favorite,
} from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFoods } />
        <Route exact path="/explore/drinks" component={ ExploreDrinks } />
        <Route exact path="/explore/foods/ingredients" component={ FoodsIngredients } />
        <Route exact path="/explore/drinks/ingredients" component={ DrinksIngredients } />
        <Route exact path="/explore/foods/nationalities" component={ Nationalities } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ Done } />
        <Route exact path="/favorite-recipes" component={ Favorite } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
