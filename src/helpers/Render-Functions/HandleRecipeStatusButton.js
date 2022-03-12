export function handleRecipeCompleteStatus(recip) {
  if (recip.idDrink !== undefined) {
    const recipeId = JSON.parse(localStorage.getItem('doneRecipes'));
    if (recipeId) {
      const doesItIncludes = recipeId.some((recipObj) => recipObj.id === recip.idDrink);
      return doesItIncludes;
    }
    return false;
  }
  if (recip.idMeal !== undefined) {
    const recipeId = JSON.parse(localStorage.getItem('doneRecipes'));
    if (recipeId) {
      const doesItIncludes = recipeId.some((recipObj) => recipObj.id === recip.idMeal);
      return doesItIncludes;
    }
    return false;
  }
}

export function handleRecipeInProgressStatus(recip) {
  if (recip.idDrink !== undefined) {
    const recipeId = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (recipeId.cocktails) {
      const recipeIdOBJValues = Object.keys(recipeId.cocktails);
      const doesItIncludes = recipeIdOBJValues.includes(recip.idDrink); // tirar o 0?
      return doesItIncludes;
    }
    return false;
  }
  if (recip.idMeal !== undefined) {
    const recipeId = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (recipeId) {
      const recipeIdOBJValues = Object.keys(recipeId.meals);
      const doesItIncludes = recipeIdOBJValues.includes(recip.idMeal);
      return doesItIncludes;
    }
    return false;
  }
}
