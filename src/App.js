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
  // RecipeDetails, comentando porque sem rota ele dá erro!
} from './Pages';
import { SearchProvider } from './context/search';

function App() {
  // O EXACT só precisa estar no caminho raíz
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <SearchProvider>
          <Route path="/foods" component={ Foods } />
          <Route path="/drinks" component={ Drinks } />
          <Route exact path="/explore" component={ Explore } />
          <Route path="/explore/foods" component={ ExploreFoods } />
          <Route path="/explore/drinks" component={ ExploreDrinks } />
          <Route path="/explore/foods/ingredients" component={ FoodsIngredients } />
          <Route path="/explore/drinks/ingredients" component={ DrinksIngredients } />
          <Route path="/explore/foods/nationalities" component={ Nationalities } />
          <Route path="/profile" component={ Profile } />
          <Route path="/done-recipes" component={ Done } />
          <Route path="/favorite-recipes" component={ Favorite } />
        </SearchProvider>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
