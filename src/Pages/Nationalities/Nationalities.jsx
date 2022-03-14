import React, { useEffect, useState, useContext } from 'react';
import { SearchContext } from '../../context/search';
import { Header, Footer } from '../../components';
import { fetchAllNations } from '../../services/Api';
import { handleRender12Meals } from '../../helpers/Render-Functions/HandleFoodRenders';

function Nationalities() {
  const {
    recipes,
    allMeals,
    getAllMeals,
    toggleCateg,
  } = useContext(SearchContext);

  const [dropOptions, setDropOptions] = useState([]);
  const [nation, setNation] = useState('');
  // const [recipesByNation, setRecipesByNation] = useState([]);

  const getNations = async () => {
    const all = await fetchAllNations();
    console.log(all);
    const nations = all.map((elem) => elem.strArea);
    setDropOptions(nations);
  };

  useEffect(() => {
    getAllMeals();
    getNations();
  }, []);

  // const getFoodByNation = async () => {
  //   const theNation = await fetchFoodByNatinonalitie(nation);
  //   setRecipesByNation(theNation);
  // };

  // useEffect(() => {
  //   getFoodByNation();
  // }, []);

  return (
    <>
      <Header name="Explore Nationalities" hasSearchIcon hasProfileIcon />
      <select
        type="select"
        data-testid="explore-by-nationality-dropdown"
        value={ nation }
        onChange={ ({ target }) => setNation(target.value) }
      >
        { dropOptions.map((opt) => (
          <option
            key={ Math.random() }
            data-testid={ `${opt}-option` }
            value={ opt }
          >
            { opt }
          </option>
        ))}
      </select>
      <section>
        { recipes.meals !== undefined
      && recipes.meals.length >= 1
      && toggleCateg.length > 0 ? handleRender12Meals(recipes.meals)
          : handleRender12Meals(allMeals.meals)}
      </section>
      <Footer />
    </>
  );
}

export default Nationalities;
