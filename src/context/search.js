import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchIngredients, fetchName, fetchFirstLetter } from '../services/Api';

export const SearchContext = createContext();
SearchContext.displayName = 'Search'; // isso aqui serve para aparecer com o nome correto na extenção do navegador para context

export function SearchProvider({ children }) {
  const [searchIngredient, setSearchIngredient] = useState();
  const [searchName, setSearchName] = useState();
  const [searchLetter, setSearchLetter] = useState('');
  const [currentPage, setCurrentPage] = useState('');

  async function SearchByIngredient(ingredient) {
    const result = await fetchIngredients(ingredient, currentPage);
    setSearchIngredient(result);
    return result;
  }

  async function SearchByName(name) {
    const result = await fetchName(name, currentPage);
    setSearchName(result);
    return result;
  }

  async function SearchByLetter(letter) {
    const result = await fetchFirstLetter(letter, currentPage);
    setSearchLetter(result);
    return result;
  }

  const context = {
    SearchByIngredient,
    SearchByName,
    SearchByLetter,

    searchIngredient,
    searchLetter,
    searchName,

    setCurrentPage,
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
