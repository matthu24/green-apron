import { fetchRecipes, fetchRecipe } from '../utils/recipe_util';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';

export const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  recipes
});

export const receiveRecipe = recipe => ({
  type: RECEIVE_RECIPE,
  recipe
})

export const fetchAllRecipes = () => dispatch => (
  fetchRecipes().then(recipes => dispatch(receiveRecipes(recipes)))
);
