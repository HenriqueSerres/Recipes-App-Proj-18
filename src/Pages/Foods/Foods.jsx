import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import { SearchContext } from '../../context/search';
import Food from './Food/Food';

function Foods() {
  const {
    recipes,
    allMeals,
    getAllMeals,
  } = useContext(SearchContext);
  const TWELVE = 12;

  useEffect(() => {
    getAllMeals();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // se eu coloco a dependencia, ele fica fazendo 30 mil requisições e talves eu tome block da api de isso continuar

  function handleRender(array) {
    if (array !== undefined) {
      return array.map((meal, index) => {
        if (index < TWELVE) {
          return (
            <Food
              meal={ meal }
              key={ meal.idMeal }
              index={ index }
            />
          );
        }
        return null;
      });
    }
  }

  return (
    <>
      <Header name="Foods" hasIcons />
      <main>
        {recipes.meals !== undefined
        && recipes.meals.length > 1 ? handleRender(recipes.meals)
          : handleRender(allMeals.meals)}

      </main>
      <Footer />
    </>
  );
}

export default Foods;
