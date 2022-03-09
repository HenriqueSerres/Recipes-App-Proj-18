import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer, CategButtons } from '../../components';
import { SearchContext } from '../../context/search';
import Drink from './Drink/Drink';

function Drinks() {
  const {
    recipes,
    allDrinks,
    getAllDrinks,
    toggleCateg,
  } = useContext(SearchContext);
  const TWELVE = 12;

  useEffect(() => {
    getAllDrinks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRender(array) {
    if (array !== undefined) {
      return array.map((drink, index) => {
        if (index < TWELVE) {
          return (
            <Link to={ `/drinks/${drink.idDrink}` }>
              <Drink
                drink={ drink }
                key={ drink.idDrink }
                index={ index }
              />
            </Link>
          );
        }
        return null;
      });
    }
  }

  return (
    <>
      <Header name="Drinks" hasIcons />
      <CategButtons name="Drinks" />
      <main>
        {recipes.drinks !== undefined
        && recipes.drinks.length >= 1
        && toggleCateg.length > 0 ? handleRender(recipes.drinks)
          : handleRender(allDrinks.drinks)}
      </main>
      <Footer />
    </>
  );
}

export default Drinks;
