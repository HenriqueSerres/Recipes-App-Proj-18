import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../components';

function ExploreDrinks() {
  return (
    <>
      <Header name="Explore Ingredients" hasSearchIcon={ false } hasProfileIcon />
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
      <Footer />
    </>
  );
}

export default ExploreDrinks;
