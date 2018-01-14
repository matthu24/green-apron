import { RECEIVE_RECIPES, RECEIVE_RECIPE } from '../actions/recipe';
import merge from 'lodash/merge';


export default (recipes={},action)=>{
  Object.freeze(recipes);
  switch(action.type) {
    case RECEIVE_RECIPES:
      return merge({},recipes,action.recipes);
    case RECEIVE_RECIPE:
      return merge({},recipes,{[action.recipe.id]:action.recipe});
    default:
      return recipes
  }
};
