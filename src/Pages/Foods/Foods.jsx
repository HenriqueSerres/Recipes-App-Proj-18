import React, { useContext, useEffect } from 'react';
import { Header, Footer, CategButtons } from '../../components';
import { SearchContext } from '../../context/search';
import Food from './Food/Food';

function Foods() {
  const {
    recipes,
    allMeals,
    getAllMeals,
    toggleCateg,
  } = useContext(SearchContext);
  const TWELVE = 12;

  useEffect(() => {
    getAllMeals();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // se eu coloco a dependencia, ele entra em um loop infinito, não mexer.

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
      <CategButtons name="Foods" />
      <main>
        {recipes.meals !== undefined
        && recipes.meals.length >= 1
        && toggleCateg.length > 0 ? handleRender(recipes.meals)
          : handleRender(allMeals.meals)}

      </main>
      <Footer />
    </>
  );
}

export default Foods;
