import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from '../SearchBar/SearchBar';

function Header({ name, hasIcons }) {
  const [showBar, setShowBar] = useState(false);
  return (
    <>
      <Link
        to="/profile"
      >
        <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title">{name}</h1>
      { hasIcons ? (
        <button
          type="button"
          onClick={ () => setShowBar(!showBar) }
        >
          <img
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="explore"
          />
        </button>) : null}
      <span>
        { showBar === true ? <SearchBar /> : null }
      </span>
    </>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  hasIcons: PropTypes.bool.isRequired,
};

export default Header;
