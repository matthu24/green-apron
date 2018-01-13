import {RECEIVE_RECIPE_ITEM,RECEIVE_RECIPE_ITEMS} from '../actions/recipe_item';
import merge from 'lodash/merge';

export default (recipe_items={},action) => {
  Object.freeze(recipe_items);
  switch (action.type) {
    case RECEIVE_RECIPE_ITEMS:
      return merge({},action.recipe_items);

    default:
      return recipe_items;
  }
}
