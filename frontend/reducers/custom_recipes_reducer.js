import {RECEIVE_CUSTOM_RECIPE,RECEIVE_CUSTOM_RECIPES,REMOVE_CUSTOM_RECIPE} from '../actions/custom_recipe';


export default (state={},action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CUSTOM_RECIPES:
      return merge({},action.custom_recipes)

    default:
      return state;
  }
}
