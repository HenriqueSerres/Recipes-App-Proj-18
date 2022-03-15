import React, { useEffect, useState } from 'react';
import { Header } from '../../components';

function Favorite() {
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    setFoodList(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, []);

  console.log(foodList);
  // const [saveRecipes, setsaveRecipes] = useState([]);
  return (
    <section>
      <Header name="Favorite Recipes" hasSearchIcon={ false } hasProfileIcon />
      <nav>
        <button data-testid="filter-by-all-btn" type="button">All</button>
        <button data-testid="filter-by-food-btn" type="button">Food</button>
        <button data-testid="filter-by-drink-btn" type="button">Drinks</button>
      </nav>

      <div>
        {foodList.length > 0
          ? (foodList.map((iten, index) => (
            <div key={ iten.id }>
              <section
                id={ iten.id }
              >
                <h1
                  data-testid={ `${index}-horizontal-name` }
                >
                  {iten.name}

                </h1>
                <img
                  alt={ iten.name }
                  data-testid={ `${index}-horizontal-image` }
                  src={ iten.image }
                />

                <h2
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {iten.category}

                </h2>

              </section>
              <section>
                <button
                  data-testid={ `${index}-horizontal-share-btn` }
                  type="button"
                >
                  share
                </button>
                <button
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  type="button"
                >
                  favorito
                </button>
              </section>
            </div>
          )))
          : null }
      </div>
    </section>
  );
}

export default Favorite;
