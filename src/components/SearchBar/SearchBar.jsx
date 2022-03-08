import React, { useState, useContext } from 'react';
import { SearchContext } from '../../context/search';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [radio, setRadio] = useState('');

  const {
    SearchByIngredient,
    SearchByName,
    SearchByLetter,
  } = useContext(SearchContext);

  async function handleSearch() {
    if (radio === 'ingredient') {
      console.log('ingred');
      const byIngredient = await SearchByIngredient(searchInput);
      return byIngredient;
    }
    if (radio === 'name') {
      console.log('nome');
      return SearchByName(searchInput);
    }
    if (radio === 'letter' && searchInput.length === 1) {
      console.log('letra');
      return SearchByLetter(searchInput);
    }
    if (radio === 'letter' && searchInput.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  }

  return (
    <nav>
      <input
        name="search-input"
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
          type="radio"
          onClick={ () => setRadio('ingredient') }
          data-testid="ingredient-search-radio"
        />
      </label>

      <label htmlFor="name">
        Name
        <input
          name="search-radio"
          type="radio"
          onClick={ () => setRadio('name') }
          data-testid="name-search-radio"
        />
      </label>

      <label htmlFor="letter">
        First Letter
        <input
          name="search-radio"
          type="radio"
          onClick={ () => setRadio('letter') }
          data-testid="first-letter-search-radio"
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ async () => {
          console.log(await handleSearch());
        } }
      >
        Search
      </button>

    </nav>
  );
}

export default SearchBar;
