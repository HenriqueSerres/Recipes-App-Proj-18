import React from 'react';
import { Header, Footer } from '../../components';

function FoodsIngredients() {
  return (
    <>
      <Header name="Explore Ingredients" hasSearchIcon={ false } hasProfileIcon />
      <div>Recipes</div>
      <Footer />
    </>
  );
}

export default FoodsIngredients;
