import React from 'react';
import PropTypes from 'prop-types';
import { handleStorageInProgressRecipes } from '../../helpers/localStorage/Storage';
import {
  handleRecipeInProgressStatus,
  handleRecipeCompleteStatus,
} from '../../helpers/Render-Functions/HandleRecipeStatusButton';

export default function RecipeButton({ recipe }) {
  function handleRender(Currentrecipe) {
    if (handleRecipeInProgressStatus(Currentrecipe) === true) {
      return 'Continue Recipe';
    }
    return 'Start Recipe';
  }

  return (
    <>
      { handleRecipeCompleteStatus(recipe) === false
        ? (
          <button
            data-testid="start-recipe-btn"
            type="button"
            style={ { position: 'fixed', bottom: '0px' } }
            onClick={ () => {
              handleStorageInProgressRecipes(recipe);
            } }
          >
            {handleRender(recipe)}
          </button>) : null}
      <p style={ { display: 'none' } }>so para funcionar</p>
    </>
  );
}

RecipeButton.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
};
