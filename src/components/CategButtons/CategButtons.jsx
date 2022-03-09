import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SearchContext } from '../../context/search';

function CategButtons({ name }) {
  const {
    getFoodCateg,
    foodCategs,
    getDrinkCateg,
    drinkCategs,
  } = useContext(SearchContext);
  const FIVE = 5;

  useEffect(() => {
    getFoodCateg();
    getDrinkCateg();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRender(categories) {
    console.log(categories);
    if (categories !== undefined) {
      return categories.map((category, index) => {
        if (index < FIVE) {
          return (
            <button
              type="button"
              key={ category.strCategory }
              index={ index }
              data-testid={ `${category.strCategory}-category-filter` }
            >
              { category.strCategory }
            </button>
          );
        }
        return null;
      });
    }
  }

  return (
    <nav>
      {name === 'Drinks'
      && drinkCategs.drinks !== undefined
        ? handleRender(drinkCategs.drinks)
        : handleRender(foodCategs.meals)}
    </nav>
  );
}

CategButtons.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategButtons;
