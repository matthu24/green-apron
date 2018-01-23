import {createFavorite, deleteFavorite, fetchFavorites } from '../utils/favorite_util';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "DELETE_FAVORITE";

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

const removeFavorite = favorite => ({
  type: REMOVE_FAVORITE,
  favorite:null
});

export const createSingleFavorite = favorite => dispatch => {
  return createFavorite(favorite)
}

export const deleteSingleFavorite = favoriteId => dispatch => {
  return deleteFavorite(favoriteId).then(favorite=>dispatch(removeFavorite(favorite)))
}
