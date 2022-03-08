import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchIngredients, fetchName, fetchFirstLetter } from '../services/Api';

export const SearchContext = createContext();
SearchContext.displayName = 'Search'; // isso aqui serve para aparecer com o nome correto na extenção do navegador para context

export function SearchProvider({ children }) {
//   const [ingredient, setIngredient] = useState('');
  const [searchIngredient, setSearchIngredient] = useState();
  //   const [name, setName] = useState('');
  const [searchName, setSearchName] = useState();
  //   const [letter, setLetter] = useState('');
  const [searchLetter, setSearchLetter] = useState('');

  async function SearchByIngredient(ingredient) {
    console.log(ingredient);
    const result = await fetchIngredients(ingredient);
    setSearchIngredient(result);
    return result;
  }

  async function SearchByName(name) {
    const result = await fetchName(name);
    setSearchName(result);
    return result;
  }

  async function SearchByLetter(letter) {
    const result = await fetchFirstLetter(letter);
    setSearchLetter(result);
    return result;
  }

  const context = {
    // setIngredient,
    // setName,
    // setLetter,
    SearchByIngredient,
    SearchByName,
    SearchByLetter,
    // letter,
    // name,
    // ingredient,

    searchIngredient,
    searchLetter,
    searchName,
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
