import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';

function Header({ name, hasIcons }) {
  return (
    <>
      <Link
        to="/profile"
      >
        <img src={ profileIcon } alt="profile" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title">{name}</h1>
      { hasIcons
        ? <img data-testid="search-top-btn" src={ searchIcon } alt="explore" />

        : null}

    </>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  hasIcons: PropTypes.bool.isRequired,
};

export default Header;
