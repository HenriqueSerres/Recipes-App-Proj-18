export const fetchIngredients = async (ingredient) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(ENDPOINT);
  const result = await response.json();
  return result;
};

export const fetchName = async (name) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const response = await fetch(ENDPOINT);
  const result = await response.json();
  return result;
};

export const fetchFirstLetter = async (letter) => {
  const ENDPOINT = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
  const response = await fetch(ENDPOINT);
  const result = await response.json();
  return result;
};
