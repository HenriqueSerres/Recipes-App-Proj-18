import React, { useState } from 'react';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [radioIngredient, setRadioIngredient] = useState();
  const [radioName, setRadioName] = useState();
  const [radioLetter, setRadioLetter] = useState();

  return (
    <nav>
      <input
        name="search-input"
        label="search-input"
        type="search"
        value={ searchInput }
        onChange={ (e) => setSearchInput(e.target.value) }
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
          onClick={ setRadioIngredient }
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
          onClick={ setRadioName }
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
          onClick={ setRadioLetter }
          data-testid="first-letter-search-radio"
          id="letter"
        />
      </label>

      <button type="button" data-testid="exec-search-btn">
        Search
      </button>

    </nav>
  );
}

export default SearchBar;
