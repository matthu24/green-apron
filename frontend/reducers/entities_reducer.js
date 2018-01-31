import React from 'react';
import {combineReducers} from 'redux';


import recipesReducer from './recipes_reducer';
import recipeItemsReducer from './recipe_items_reducer';
import customRecipesReducer from './custom_recipes_reducer';


export default combineReducers({
  recipes: recipesReducer,
  recipe_items: recipeItemsReducer,
  custom_recipes: customRecipesReducer
});
