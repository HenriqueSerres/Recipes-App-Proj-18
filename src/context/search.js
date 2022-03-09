import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  fetchIngredients,
  fetchName,
  fetchFirstLetter,
  fetchAllMeals,
  fetchAllDrinks,
  fetchFoodCateg,
  fetchDrinkCateg,
  fetchFoodCategRecipes,
  fetchDrinkCategRecipes } from '../services/Api';

export const SearchContext = createContext();
SearchContext.displayName = 'Search'; // isso aqui serve para aparecer com o nome correto na extenção do navegador para context

export function SearchProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
  const [allMeals, setAllMeals] = useState([]);
  const [allDrinks, setAllDrinks] = useState([]);
  const [foodCategs, setFoodCategs] = useState([]);
  const [drinkCategs, setDrinkCategs] = useState([]);
  const [toggleCateg, setToggleCateg] = useState('');

  const error = 'Sorry, we haven\'t found any recipes for these filters.';

  async function SearchByIngredient(ingredient) {
    const result = await fetchIngredients(ingredient, currentPage);
    if (result.meals === null || result.drinks === null) {
      global.alert(error);
      return;
    }
    setRecipes(result);
  }

  async function SearchByName(name) {
    const result = await fetchName(name, currentPage);
    if (result.meals === null || result.drinks === null) {
      global.alert(error);
      return;
    }
    setRecipes(result);
  }

  async function SearchByLetter(letter) {
    const result = await fetchFirstLetter(letter, currentPage);
    if (result.meals === null || result.drinks === null) {
      global.alert(error);
      return;
    }
    setRecipes(result);
  }

  async function getAllMeals() {
    const result = await fetchAllMeals();
    setAllMeals(result);
  }

  async function getAllDrinks() {
    const result = await fetchAllDrinks();
    setAllDrinks(result);
  }

  async function getFoodCateg() {
    const result = await fetchFoodCateg();
    setFoodCategs(result);
  }

  async function getDrinkCateg() {
    const result = await fetchDrinkCateg();
    setDrinkCategs(result);
  }

  async function SearchFoodRecipeByCategory(category, prevCategory) {
    if (prevCategory === category) {
      getAllMeals();
      setToggleCateg('');
    }
    if (prevCategory !== category) {
      const result = await fetchFoodCategRecipes(category);
      setRecipes(result);
    }
  }

  async function SearchDrinkRecipeByCategory(category, prevCategory) {
    if (prevCategory === category) {
      getAllDrinks();
      setToggleCateg('');
    }
    if (prevCategory !== category) {
      const result = await fetchDrinkCategRecipes(category);
      setRecipes(result);
    }
  }

  const context = {
    SearchByIngredient,
    SearchByName,
    SearchByLetter,
    setCurrentPage,
    recipes,
    allMeals,
    getAllMeals,
    allDrinks,
    getAllDrinks,
    getFoodCateg,
    foodCategs,
    getDrinkCateg,
    drinkCategs,
    SearchFoodRecipeByCategory,
    SearchDrinkRecipeByCategory,
    toggleCateg,
    setToggleCateg,
  };

  return (
    <SearchContext.Provider value={ context }>
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};
