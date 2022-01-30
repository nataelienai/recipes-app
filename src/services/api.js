/* Foods */
export const getFoodsMainPageApi = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const response = request.json();
  return response;
};
export const getCategoryFoodsApi = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const response = request.json();
  return response;
};
export const getFoodIngredientApi = async (info) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${info}`);
  const response = request.json();
  return response;
};
export const getFoodNameApi = async (info) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${info}`);
  const response = request.json();
  return response;
};
export const getFoodFirstletterApi = async (info) => {
  const request = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${info}`);
  const response = await request.json();
  return response;
};
/* Drinks */
export const getDrinksMainPageApi = async () => {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const response = request.json();
  return response;
};
export const getCategoryDrinksApi = async () => {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const response = request.json();
  return response;
};
export const getDrinkIngredientApi = async (info) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${info}`);
  const response = request.json();
  return response;
};
export const getDrinkNameApi = async (info) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${info}`);
  const response = request.json();
  return response;
};
export const getDrinkFirstletterApi = async (info) => {
  const request = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${info}`);
  const response = await request.json();
  return response;
};
/* Random */
export const getRandomFoodApi = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const response = await request.json();
  return response.meals[0];
};

export const getRandomDrinkApi = async () => {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const response = await request.json();
  return response.drinks[0];
};
/* Ingredientes */
export const getFoodIngredientsApi = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  const response = await request.json();
  return response.meals;
};

export const getDrinkIngredientsApi = async () => {
  const request = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
  const response = await request.json();
  return response.drinks;
};
