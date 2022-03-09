import React from 'react';
import { Header, FooterComponent } from '../../components';

function RecipeDetails() {
  const img = 'https://maringa.cidadecancao.com/media/catalog/product/cache/1/image/855x635/9df78eab33525d08d6e5fb8d27136e95/b/a/batata-extra-kg-0000000028417.jpg';
  const video = 'https://www.youtube.com/embed/pl_WLJrWtY8';
  return (
    <>
      <Header name="Profile" hasIcons={ false } />
      <section>
        <h1 data-testid="recipe-title">Recipe Title</h1>
        <h2 data-testid="recipe-category"> Category </h2>
        <button type="button" data-testid="start-recipe-btn"> Start Recipe</button>
        <img src={ img } alt="recipephoto" data-testid="recipe-photo" />
        {/* colocar map para ingredient */}
        {/* <p data-testid="${index}-ingredient-name-and-measure"> ingredient</p> */}
        <p data-testid="0-ingredient-name-and-measure"> ingredient</p>
        <p data-testid="instructions"> instructions </p>
        {/* colocar condicional para aparecer somente em comidas */}
        <video alt="recipeVideo" data-testid="video">
          <source src={ video } type="video/mp4" />
          <source src={ video } type="video/ogg" />
          <track kind="captions" />
        </video>

        <button type="button" data-testid="share-btn">Share</button>
        <button type="button" data-testid="favorite-btn"> favorite </button>
      </section>
      <section>
        <h1 data-testid="0-recomendation-card">card recomendado</h1>
        {/* <h1 data-testid="${index}-recomendation-card">card recomendado</h1> */}
        card recomendado
      </section>
      <FooterComponent />
    </>
  );
}

export default RecipeDetails;
