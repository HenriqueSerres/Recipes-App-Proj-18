import React, { useContext, useLayoutEffect, useEffect, useState } from 'react';
import { SearchContext } from '../../../context/search';
import shareIcon from '../../../images/shareIcon.svg';
import favorite from '../../../images/whiteHeartIcon.svg';
import getIngredientsArray from '../../../helpers/IngredientsFunc';
import getIngredientMeasure from '../../../helpers/MeasureFunc';
import { handleRender6Meals } from '../../../helpers/HandleFoodRenders';

function DrinksDetails() {
  const {
    drink,
    getOneDrink,
    allMeals,
    getAllMeals,
  } = useContext(SearchContext);

  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  useLayoutEffect(() => {
    function getDrinkIdFromUrlAndCallFetch() {
      const FOUR = 4;
      const TEN = 10;
      const url = window.location.href;
      const urlNumbers = url.replace(/\D/g, '');
      const urlId = urlNumbers.slice(FOUR, TEN);
      getOneDrink(urlId);
      getAllMeals();
    }
    getDrinkIdFromUrlAndCallFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.keys(drink)[0] === 'drinks') {
      setIngredients(getIngredientsArray(drink.drinks[0]));
      setMeasures(getIngredientMeasure(drink.drinks[0]));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drink]);

  console.log(drink);
  function handleRender(oneDrink, allIngredients, allMeasures, AllMealsParam) {
    return (
      <section>
        <h1 data-testid="recipe-title">{oneDrink.strDrink}</h1>
        <img
          data-testid="recipe-photo"
          src={ oneDrink.strDrinkThumb }
          alt={ oneDrink.strDrink }
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
        <h3 data-testid="recipe-category">{oneDrink.strAlcoholic}</h3>
        <h3>{oneDrink.strCategory}</h3>
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
          <p data-testid="instructions">{oneDrink.strInstructions}</p>
        </article>
        <button data-testid="start-recipe-btn" type="button">Start Recipe</button>
        <div>{handleRender6Meals(AllMealsParam.meals)}</div>
      </section>
    );
  }

  return (
    <>
      {Object.keys(drink)[0] === 'drinks'
        ? handleRender(drink.drinks[0], ingredients, measures, allMeals)
        : <p>loading...</p>}
      <p style={ { display: 'none' } }>so para funcionar, não mostra na tela</p>
    </>
  );
}

export default DrinksDetails;
