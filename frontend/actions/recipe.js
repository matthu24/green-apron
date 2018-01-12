import { fetchRecipes, fetchRecipe } from '../utils/recipe_util';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_RECIPE = 'RECEIVE_RECIPE';

//recipes are passed to this action by the ajax request response
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

export const fetchSingleRecipe = (id) => dispatch => (
  fetchRecipe().then(recipe => dispatch(receiveRecipe(recipe)))
);
