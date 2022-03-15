import React, { useEffect, useState } from 'react';
import { Header } from '../../components';
import { handleRecipeFavoriteRemoval }
from '../../helpers/Render-Functions/HandleFavIconRender';
import shareIcon from '../../images/shareIcon.svg';
import notFavorite from '../../images/whiteHeartIcon.svg';
import isFavorite from '../../images/blackHeartIcon.svg';

function Favorite() {
  const [foodList, setFoodList] = useState([]);
  const [favIcon, setFavIcon] = useState(true);
  const [message, setMessage] = useState(false);
  const url = window.location.href;

  useEffect(() => {
    setFoodList(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, []);

  useEffect(() => {
    setFoodList(JSON.parse(localStorage.getItem('favoriteRecipes')));
  }, [localStorage.getItem('favoriteRecipes')]);

  function handleFavIconToggle(id) {
    if (favIcon) {
      handleRecipeFavoriteRemoval(id);
      setFavIcon((prevState) => !prevState);
      return;
    }
    setFavIcon((prevState) => !prevState);
  }
  function handleCopy() {
    const THREE_SEC = 2000;
    setMessage(true);
    navigator.clipboard.writeText(url);
    setTimeout(() => setMessage(false), THREE_SEC);
  }
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
                  {`${iten.nationality} - ${iten.category}`}
                </h2>

              </section>
              <section>
                {message ? <span>Link copied!</span> : null}
                <button
                  type="button"
                  onClick={ () => handleCopy() }
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    src={ shareIcon }
                    alt="share"
                  />
                </button>
                <button
                  type="button"
                  onClick={ () => handleFavIconToggle(iten.id) }
                >
                  {favIcon ? (
                    <img
                      src={ isFavorite }
                      alt="favorite"
                      data-testid={ `${index}-horizontal-favorite-btn` }
                    />
                  ) : (
                    <img
                      src={ notFavorite }
                      alt="favorite"
                      data-testid={ `${index}-horizontal-favorite-btn` }
                    />
                  )}
                </button>
              </section>
            </div>
          )))
          : (<p>Não há itens favoritados</p>) }
      </div>
    </section>
  );
}

export default Favorite;
