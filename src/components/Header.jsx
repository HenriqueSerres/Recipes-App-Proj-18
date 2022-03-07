import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Link
        data-testid="profile-top-btn"
        href="/profile"
      >
        <img src="src/images/profileIcon.svg" alt="profile" />
      </Link>
      <h1 data-testid="page-title">Foods</h1>
      <Link
        data-testid="search-top-btn"
        href="/explore"
      >
        <img src="src/images/searchIcon.svg" alt="explore" />
      </Link>
    </>
  );
}

export default Header;
