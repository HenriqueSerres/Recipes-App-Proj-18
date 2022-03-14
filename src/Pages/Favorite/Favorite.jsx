import React, { useState } from 'react';
import { ButtonFavorites, Header } from '../../components';

function Favorite() {
  const [saveRecipes, setsaveRecipes] = useState([]);
  return (
    <section>
      <Header name="Favorite Recipes" hasSearchIcon={ false } hasProfileIcon />

      <ButtonFavorites />

    </section>
  );
}

export default Favorite;
