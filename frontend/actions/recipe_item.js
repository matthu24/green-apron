import {fetchRecipeItems, fetchRecipeItem} from '../utils/recipe_item_util';

export const RECEIVE_RECIPE_ITEMS = "RECEIVE_RECIPE_ITEMS";
export const RECEIVE_RECIPE_ITEM = "RECEIVE_RECIPE_ITEM";

export const receiveRecipeItems = recipe_items => ({
  type: RECEIVE_RECIPE_ITEMS,
  recipe_items
})

export const receiveRecipeItem = recipe_item => ({
  type: RECEIVE_RECIPE_ITEM,
  recipe_item
})

export const fetchAllRecipeItems = () => dispatch => (
  fetchRecipeItems().then(recipe_items => dispatch(receiveRecipeItems(recipe_items)))
)

// export const fetchSingleRecipeItem = recipe => dispatch => (
//   fetchRecipeItem().then(recipe => dispatch(receiveRecipeItem(recipe)))
// )
