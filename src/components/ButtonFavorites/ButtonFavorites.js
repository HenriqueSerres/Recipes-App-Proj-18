import React from 'react';
import { NaviFilterButtons } from '..';

function ButtonFavorites(SalvedFood) {
  const foodList = SalvedFood;
  return (
    <>
      <NaviFilterButtons />
      {foodList.map(
        (iten, index) => (
          <>
            <section
              id={ iten.id }
            >
              <img
                alt={ iten.name }
                data-testid={ `${index}-horizontal-image` }
                src={ iten.image }
              />

              <h1
                data-testid={ `${index}-horizontal-name` }
              >
                {iten.name}

              </h1>

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
            </section>
          </>
        ),
      )}
    </>
  );
}
export default ButtonFavorites;
