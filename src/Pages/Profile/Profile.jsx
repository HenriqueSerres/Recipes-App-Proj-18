import React from 'react';
import { Header, FooterComponent } from '../../components';

function Profile() {
  return (
    <>
      <Header name="Profile" hasIcons={ false } />
      <div>Recipes</div>
      <FooterComponent />
    </>
  );
}

export default Profile;
