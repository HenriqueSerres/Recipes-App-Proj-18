import React, { useContext } from 'react';
import { Header, Footer } from '../../components';
import { SearchContext } from '../../context/search';
import Drink from './Drink/Drink';

function Drinks() {
  const {
    recipes,
  } = useContext(SearchContext);
  const TWELVE = 12;

  return (
    <>
      <Header name="Drinks" hasIcons />
      <main>
        {recipes.drinks !== undefined
        && recipes.drinks.length > 1 ? recipes.drinks.map((drink, index) => {
            if (index < TWELVE) {
              return (
                <Drink
                  drink={ drink }
                  key={ drink.idDrink }
                  index={ index }
                />
              );
            }
            return null;
          }) : null }
      </main>
      <Footer />
    </>
  );
}

export default Drinks;
