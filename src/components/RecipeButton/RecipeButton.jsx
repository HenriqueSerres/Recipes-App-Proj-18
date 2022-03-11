import React from 'react';
import PropTypes from 'prop-types';
import { handleStorageCompleteRecipes } from '../../helpers/localStorage/Storage';

export default function RecipeButton({ recipe }) {
  function handleRecipeStatus(recip) {
    if (recip.idDrink !== undefined) {
      const recipeId = JSON.parse(localStorage.getItem('doneRecipes'));
      if (recipeId) {
        const doesItIncludes = recipeId.some((recipObj) => recipObj.id === recip.idDrink);
        return doesItIncludes;
      }
      return false;
    }
    if (recip.idMeal !== undefined) {
      const recipeId = JSON.parse(localStorage.getItem('doneRecipes'));
      if (recipeId) {
        const doesItIncludes = recipeId.some((recipObj) => recipObj.id === recip.idMeal);
        return doesItIncludes;
      }
      return false;
    }
  }
  return (
    <>
      { handleRecipeStatus(recipe) === false
        ? (
          <button
            data-testid="start-recipe-btn"
            type="button"
            style={ { position: 'fixed', bottom: '0px' } }
            onClick={ () => {
              handleStorageCompleteRecipes(recipe);
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
