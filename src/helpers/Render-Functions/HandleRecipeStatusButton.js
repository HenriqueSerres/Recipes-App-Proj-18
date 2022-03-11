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
    if (recipeId) {
      const recipeIdOBJValues = Object.keys(recipeId.cocktails);
      const doesItIncludes = recipeIdOBJValues[0].includes(recip.idDrink);
      return doesItIncludes;
    }
    return false;
  }
  if (recip.idMeal !== undefined) {
    const recipeId = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (recipeId) {
      console.log('meal obj', recipeId);
      const recipeIdOBJValues = Object.keys(recipeId.meals);
      const doesItIncludes = recipeIdOBJValues[0].includes(recip.idMeal);
      return doesItIncludes;
    }
    return false;
  }
}
