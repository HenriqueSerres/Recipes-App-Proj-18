import React, { useState } from 'react';
import { ButtonFavorites, Header } from '../../components';

function Favorite() {
  const [saveRecipes, setsaveRecipes] = useState([]);
  return (
    <section>
      <Header name="Favorite Recipes" hasIcons={ false } />

      <ButtonFavorites />

      <div>Recipes</div>

    </section>
  );
}

export default Favorite;
