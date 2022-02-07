export function getInProgressRecipes() {
  const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));

  return inProgressRecipes || { meals: {}, cocktails: {} };
}

export function setInProgressRecipes(inProgressRecipes) {
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
}

export function getDoneRecipes() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return doneRecipes || [];
}

export function setDoneRecipes(doneRecipes) {
  localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
}

export function addDoneRecipe(recipe) {
  const doneRecipes = getDoneRecipes();
  setDoneRecipes(doneRecipes.concat(recipe));
}

export function getfavoriteRecipes() {
  const doneRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return doneRecipes || [];
}

export function setfavoriteRecipes(favoriteRecipes) {
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
}
