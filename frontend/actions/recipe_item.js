import {fetchRecipeItems, fetchRecipeItem} from '../utils/recipe_item_util';

export const RECEIVE_RECIPE_ITEMS = "RECEIVE_RECIPE_ITEMS";
export const RECEIVE_RECIPE_ITEM = "RECEIVE_RECIPE_ITEM";

export const receiveRecipeItems = recipes => ({
  type: RECEIVE_RECIPE_ITEMS,
  recipes
})

export const receiveRecipeItem = recipe => ({
  type: RECEIVE_RECIPE_ITEM,
  recipe
})

export const fetchAllRecipeItems = () => dispatch => (
  fetchRecipeItems().then(recipes => dispatch(receieRecipeItems(recipe)))
)

export const fetchSingleRecipeItem = recipe => dispatch => (
  fetchRecipeItem().then(recipe => dispatch(receiveRecipeItem(recipe)))
)
