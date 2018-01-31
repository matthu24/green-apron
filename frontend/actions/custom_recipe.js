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
