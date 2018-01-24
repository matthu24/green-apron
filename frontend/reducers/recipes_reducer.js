import { RECEIVE_RECIPES, RECEIVE_RECIPE } from '../actions/recipe';
import {REMOVE_FAVORITE} from '../actions/favorite';
import merge from 'lodash/merge';


export default (recipes={},action)=>{
  Object.freeze(recipes);
  switch(action.type) {
    case RECEIVE_RECIPES:
      return merge({},action.recipes);

    case RECEIVE_RECIPE:
      return merge({},recipes,{[action.recipe.id]:action.recipe});
    default:
      return recipes
  }
};
