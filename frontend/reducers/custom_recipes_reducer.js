import {RECEIVE_CUSTOM_RECIPE,RECEIVE_CUSTOM_RECIPES,REMOVE_CUSTOM_RECIPE} from '../actions/custom_recipe';
import merge from 'lodash/merge';


export default (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CUSTOM_RECIPES:
      return merge({},action.custom_recipes)
    case RECEIVE_CUSTOM_RECIPE:
      return merge({},state,{[action.custom_recipe.id]:action.custom_recipe})
    case REMOVE_CUSTOM_RECIPE:
      let newState = merge({},state);
      delete newState[action.custom_recipe.id];
      return newState;
    default:
      return state;
  }
}
