
import React, { useContext } from 'react';
import { Header, FooterComponent } from '../../components';
import { SearchContext } from '../../context/search';
import Food from './Food/Food';


function Foods() {
  const {
    recipes,
  } = useContext(SearchContext);
  const TWELVE = 12;
  console.log(recipes);
  return (
    <>
      <Header name="Foods" hasIcons />
      <main>
        {recipes.meals !== undefined
        && recipes.meals.length > 1 ? recipes.meals.map((meal, index) => {
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
          }) : null }
      </main>
      <FooterComponent />
    </>
  );
}

export default Foods;
