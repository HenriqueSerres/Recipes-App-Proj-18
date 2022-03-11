import React from 'react';
import PropTypes from 'prop-types';
import { handleStorageInProgressRecipes } from '../../helpers/localStorage/Storage';

export default function RecipeButton({ recipe }) {
  function handleRecipeStatus(recipee) {
    if (recipee.idDrink !== undefined) {
      const recipeId = localStorage.getItem(recipee.idDrink);
      const doesItIncludes = recipeId.includes(recipee.idDrink);
      return doesItIncludes;
    }
    if (recipee.idMeal !== undefined) {
      console.log('entra', recipee.idMeal);
      const recipeId = localStorage.getItem('meals'); // porque retorna null se eu to setando o valor com idMeal?
      console.log('chave da receita', recipeId);
      const doesItIncludes = recipeId.includes(recipee.idMeal);
      return doesItIncludes;
    }
  }
  return (
    <>
      { handleRecipeStatus(recipe) === true
        ? (
          <button
            data-testid="start-recipe-btn"
            type="button"
            style={ { position: 'fixed', bottom: '0px' } }
            onClick={ () => {
              handleStorageInProgressRecipes(recipe);
            } }
          >
            Start Recipe
          </button>) : null}
      <p style={ { display: 'none' } }>so para funcionar</p>
    </>
  );
}

RecipeButton.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};
