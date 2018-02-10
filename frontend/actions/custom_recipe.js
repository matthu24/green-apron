import {createCustomRecipe, deleteCustomRecipe, fetchUserCustomRecipes, fetchCustomRecipe } from '../utils/custom_recipe_util';


export const RECEIVE_CUSTOM_RECIPE = 'RECEIVE_CUSTOM_RECIPE';
export const RECEIVE_CUSTOM_RECIPES = 'RECEIVE_CUSTOM_RECIPES';
export const REMOVE_CUSTOM_RECIPE = 'REMOVE_CUSTOM_RECIPE';


const receiveCustomRecipe = custom_recipe => ({
  type: RECEIVE_CUSTOM_RECIPE,
  custom_recipe
});

const receiveCustomRecipes = custom_recipes => ({
  type: RECEIVE_CUSTOM_RECIPES,
  custom_recipes
});

const removeCustomRecipe = custom_recipe => ({
  type: REMOVE_CUSTOM_RECIPE,
  custom_recipe
});


export const createSingleCustomRecipe = (user_id,custom_recipe) => dispatch => {
  return createCustomRecipe(user_id, custom_recipe).then(recipe => dispatch(receiveCustomRecipe(recipe)));
}

export const fetchCustomRecipes = (user_id) => dispatch => {
  return fetchUserCustomRecipes(user_id).then(recipes => dispatch(receiveCustomRecipes(recipes)));
}

export const fetchSingleCustomRecipe = (recipe_id) => dispatch => {
  return fetchCustomRecipe(recipe_id).then(recipe => dispatch(receiveCustomRecipe(recipe)));
}

export const deleteSingleCustomRecipe = (recipe_id) => dispatch => {
  return deleteCustomRecipe(recipe_id).then(recipe => dispatch(removeCustomRecipe(recipe)));
}

// export const deleteSingleCustomRecipe =
