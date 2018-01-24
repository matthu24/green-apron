import React from 'react';
import {combineReducers} from 'redux';


import recipesReducer from './recipes_reducer';
import recipeItemsReducer from './recipe_items_reducer';



export default combineReducers({
  recipes: recipesReducer,
  recipe_items: recipeItemsReducer
});
