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
  FoodDetails,
  DrinkDetails,
  InProgressDrink,
  InProgressFood,
} from './Pages';
import { SearchProvider } from './context/search';

function App() {
  // O EXACT só precisa estar no caminho raíz
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Login } />
      <SearchProvider>
        <Switch>
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/foods/:id" component={ FoodDetails } />
          <Route path="/foods/:id/in-progress" component={ InProgressFood } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/drinks/:id" component={ DrinkDetails } />
          <Route path="/drinks/:id/in-progress" component={ InProgressDrink } />
          <Route exact path="/explore" component={ Explore } />
          <Route exact path="/explore/foods" component={ ExploreFoods } />
          <Route exact path="/explore/drinks" component={ ExploreDrinks } />
          <Route exact path="/explore/foods/ingredients" component={ FoodsIngredients } />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ DrinksIngredients }
          />
          <Route exact path="/explore/foods/nationalities" component={ Nationalities } />
          <Route path="/profile" component={ Profile } />
          <Route path="/done-recipes" component={ Done } />
          <Route path="/favorite-recipes" component={ Favorite } />
        </Switch>
      </SearchProvider>

    </BrowserRouter>
  );
}

export default App;
