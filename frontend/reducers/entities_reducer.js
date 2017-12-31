import React from 'react';
import {combineReducers} from 'redux';


import recipesReducer from './recipes_reducer';



export default combineReducers({
  recipes: recipesReducer

});
