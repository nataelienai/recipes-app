import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDrinkDetailsByIdApi, getMealDetailsByIdApi } from '../services/api';

export default function useRecipeDetailsById(recipeId) {
  const [recipe, setRecipe] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith('/foods')) {
      getMealDetailsByIdApi(recipeId).then(setRecipe);
    } else {
      getDrinkDetailsByIdApi(recipeId).then(setRecipe);
    }
  }, [recipeId, pathname]);

  return recipe;
}
