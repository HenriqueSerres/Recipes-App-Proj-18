import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, FooterComponent } from '../../components';

function Profile() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    const userEmail = JSON.parse(localStorage.getItem('user'));
    setEmail(userEmail.email);
  }, []);

  return (
    <>
      <Header name="Profile" hasIcons={ false } />
      <div>
        <p data-testid="profile-email">
          { email }
        </p>
        <Link to="/done-recipes">
          <button type="button" data-testid="profile-done-btn">
            Done Recipes
          </button>
        </Link>
        <Link to="/favorite-recipes">
          <button type="button" data-testid="profile-favorite-btn">
            Favorite Recipes
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => localStorage.clear() }
          >
            Logout
          </button>
        </Link>
      </div>
      <FooterComponent />
    </>
  );
}

export default Profile;
