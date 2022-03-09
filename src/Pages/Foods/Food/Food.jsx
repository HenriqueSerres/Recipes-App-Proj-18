import React from 'react';
import PropTypes from 'prop-types';

function Food({ meal, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <h3 data-testid={ `${index}-card-name` }>{meal.strMeal}</h3>
      <img
        data-testid={ `${index}-card-img` }
        src={ meal.strMealThumb }
        alt={ meal.strMeal }
      />
    </div>
  );
}

Food.propTypes = {
  meal: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};

export default Food;
