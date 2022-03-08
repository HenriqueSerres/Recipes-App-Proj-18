import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components';

function ExploreDrinks() {
  return (
    <>
      <Header name="Explore Drinks" hasIcons={ false } />
      <div>
        <Link to="/explore/drinks/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
        </button>
      </div>
    </>
  );
}

export default ExploreDrinks;
