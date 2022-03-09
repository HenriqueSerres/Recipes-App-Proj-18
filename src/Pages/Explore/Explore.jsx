import React from 'react';
import { Link } from 'react-router-dom';
import { Header, FooterComponent } from '../../components';

function Explore() {
  return (
    <>
      <Header name="Explore" hasIcons={ false } />
      <div>
        <Link to="/explore/foods">
          <button type="button" data-testid="explore-foods">Explore Foods</button>
        </Link>
        <Link to="/explore/drinks">
          <button type="button" data-testid="explore-drinks">Explore Drinks</button>
        </Link>
        <FooterComponent />
      </div>
    </>
  );
}

export default Explore;
