// import getIngredientsArray from '../IngredientsFunc';

export function handleStorageCompleteRecipes(recipe) {
  const today = new Date();
  const todayDate = `${today.getDate()
  }/${today.getMonth() + 1}/${today.getFullYear()}`;

  if (recipe.idDrink !== undefined) {
    const doneDrinkRecipes = {
      id: recipe.idDrink,
      type: 'drink',
      nationality: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
      doneData: todayDate,
      tags: recipe.strTags,
    };
    localStorage.setItem('doneRecipes', JSON.stringify([...doneDrinkRecipes]));
  }
  if (recipe.idMeal !== undefined) {
    const doneMealRecipes = {
      id: recipe.idMeal,
      type: 'food',
      nationality: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      doneData: todayDate,
      tags: recipe.strTags,
    };
    localStorage.setItem('doneRecipes', JSON.stringify([...doneMealRecipes]));
  }
}

export function handleStorageInProgressRecipes(recipe) {
  if (recipe.idDrink !== undefined) {
    const drinkId = recipe.idDrink;
    const drinkStorage = {
      cocktails: {
        [drinkId]: 'retornar ingrediente conforme é marcado',
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(drinkStorage));
  }
  if (recipe.idMeal !== undefined) {
    const mealId = recipe.idMeal;
    const mealsStorage = {
      meals: {
        [mealId]: 'retornar ingrediente conforme é marcado',
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(mealsStorage));
  }
}

export function handleStorageFavoriteRecipes(recipe) {
  const favRecipe = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (recipe.idDrink !== undefined) {
    const favoriteDrinkRecipes = {
      id: recipe.idDrink,
      type: 'drink',
      nationality: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
    };
    if (favRecipe) {
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...favRecipe, favoriteDrinkRecipes]));
      return;
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteDrinkRecipes]));
  }
  if (recipe.idMeal !== undefined) {
    const favorieMealRecipes = {
      id: recipe.idMeal,
      type: 'food',
      nationality: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
    };
    if (favRecipe) {
      localStorage.setItem('favoriteRecipes',
        JSON.stringify([...favRecipe, favorieMealRecipes]));
      return;
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify([favorieMealRecipes]));
  }
}
