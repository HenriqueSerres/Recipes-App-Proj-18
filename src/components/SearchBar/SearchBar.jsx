import React, { useState, useContext } from 'react';
import { SearchContext } from '../../context/search';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [radioIngredient, setRadioIngredient] = useState(false);
  const [radioName, setRadioName] = useState(false);
  const [radioLetter, setRadioLetter] = useState(false);
  // console.log(radioIngredient);
  // console.log('name', radioName);
  // console.log('letter', radioLetter);
  const {
    setIngredient,
    setName,
    setLetter,
    SearchByIngredient,
    SearchByName,
    SearchByLetter,
    letter,

    searchIngredient,
    // searchLetter,
    // searchName,
  } = useContext(SearchContext);

  function handleFilters() {
    if (radioIngredient === true) {
      return SearchByIngredient();
    }
    if (radioLetter === true && letter.length === 1) {
      return SearchByLetter();
    }
    if (letter.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    if (radioName === true) {
      return SearchByName();
    }
  }

  console.log(searchIngredient);

  return (
    <nav>
      <input
        name="search-input"
        label="search-input"
        type="search"
        value={ searchInput }
        onChange={ (e) => {
          setSearchInput(e.target.value);
        } }
        placeholder="Search for a recipe..."
        data-testid="search-input"
      />

      <label htmlFor="ingredient">
        Ingredient
        <input
          name="search-radio"
          label="ingredient-radio"
          type="radio"
          value={ radioIngredient }
          onClick={ () => {
            setRadioIngredient(!radioIngredient);
            setIngredient(searchInput);
            setRadioName(false);
            setRadioLetter(false);
          } }
          data-testid="ingredient-search-radio"
          id="ingredient"
        />
      </label>

      <label htmlFor="name">
        Name
        <input
          name="search-radio"
          label="name-radio"
          type="radio"
          value={ radioName }
          onClick={ () => {
            setRadioName(!radioName);
            setName(searchInput);
            setRadioIngredient(false);
            setRadioLetter(false);
          } }
          data-testid="name-search-radio"
          id="name"
        />
      </label>

      <label htmlFor="letter">
        First Letter
        <input
          name="search-radio"
          label="letter-radio"
          type="radio"
          value={ radioLetter }
          onClick={ () => {
            setRadioLetter(!radioLetter);
            setLetter(searchInput);
            setRadioName(false);
            setRadioIngredient(false);
          } }
          data-testid="first-letter-search-radio"
          id="letter"
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => console.log(handleFilters()) }
      >
        Search
      </button>

    </nav>
  );
}

export default SearchBar;
