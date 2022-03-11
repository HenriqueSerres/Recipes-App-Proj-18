import React, { useContext, useLayoutEffect, useEffect, useState } from 'react';
import { SearchContext } from '../../../context/search';
import shareIcon from '../../../images/shareIcon.svg';
import favorite from '../../../images/whiteHeartIcon.svg';
import getIngredientsArray from '../../../helpers/IngredientsFunc';
import getIngredientMeasure from '../../../helpers/MeasureFunc';
import { handleRender6Drinks } from '../../../helpers/HandleDrinkRenders';
import RecipeButton from '../../../components/RecipeButton/RecipeButton';

function FoodDetails() {
  const {
    meal,
    getOneMeal,
    allDrinks,
    getAllDrinks,
  } = useContext(SearchContext);

  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  useLayoutEffect(() => {
    function getMealIdFromUrlAndCallFetch() {
      const FOUR = 4;
      const NINE = 9;
      const url = window.location.href;
      const urlNumbers = url.replace(/\D/g, '');
      const urlId = urlNumbers.slice(FOUR, NINE);
      getOneMeal(urlId);
      getAllDrinks();
    }
    getMealIdFromUrlAndCallFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.keys(meal)[0] === 'meals') {
      setIngredients(getIngredientsArray(meal.meals[0]));
      setMeasures(getIngredientMeasure(meal.meals[0]));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meal]);

  function handleRender(oneMeal, allIngredients, allMeasures, AllDrinksParam) {
    const youtubeUrlID = oneMeal.strYoutube && oneMeal.strYoutube.split('=')[1];
    return (
      <section>
        <h1 data-testid="recipe-title">{oneMeal.strMeal}</h1>
        <img
          data-testid="recipe-photo"
          src={ oneMeal.strMealThumb }
          alt={ oneMeal.strMeal }
        />
        <button type="button" data-testid="share-btn">
          <img
            src={ shareIcon }
            alt="share"
          />
        </button>
        <button type="button" data-testid="favorite-btn">
          <img
            src={ favorite }
            alt="favorite"
          />
        </button>
        <h3 data-testid="recipe-category">{oneMeal.strCategory}</h3>
        <article>
          <ul>
            { allIngredients.map((ingredient, index) => (
              <li
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                {ingredient}
              </li>
            ))}
          </ul>
          <ul>
            { allMeasures.map((measure, index) => (
              <li
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                {measure}
              </li>
            ))}
          </ul>
          <p data-testid="instructions">{oneMeal.strInstructions}</p>
        </article>
        <iframe
          data-testid="video"
          height="500px"
          width="500px"
          src={ `https://www.youtube.com/embed/${youtubeUrlID || ''}` }
          title="recipe video"
          allowFullScreen
        />
        <div>{handleRender6Drinks(AllDrinksParam.drinks)}</div>
        <RecipeButton recipe={ oneMeal } />
      </section>
    );
  }

  return (
    <>
      {Object.keys(meal)[0] === 'meals'
        ? handleRender(meal.meals[0], ingredients, measures, allDrinks)
        : <p>loading...</p>}
      <p style={ { display: 'none' } }>so para funcionar</p>
    </>
  );
}

export default FoodDetails;
