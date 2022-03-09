import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../components';

function ExploreFoods() {
  return (
    <>
      <Header name="Explore Foods" hasIcons={ false } />
      <div>
        <Link to="/explore/foods/ingredients">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            By Ingredient
          </button>
        </Link>
        <Link to="/explore/foods/nationalities">
          <button
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
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

export default ExploreFoods;
