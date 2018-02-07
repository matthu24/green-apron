import {RECEIVE_CUSTOM_RECIPE,RECEIVE_CUSTOM_RECIPES,REMOVE_CUSTOM_RECIPE} from '../actions/custom_recipe';
import merge from 'lodash/merge';


export default (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CUSTOM_RECIPES:
      return merge({},action.custom_recipes)
    case RECEIVE_CUSTOM_RECIPE:
      return merge({},state,{[action.custom_recipe.id]:action.custom_recipe})
    default:
      return state;
  }
}
