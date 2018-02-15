import {createFavorite, deleteFavorite, fetchFavorites } from '../utils/favorite_util';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

const toggleFavorite = toggle => ({
  type: TOGGLE_FAVORITE
})

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

const receiveFavorites = favorites => ({
  type: RECEIVE_FAVORITES,
  favorites
});

const removeFavorite = favorite => ({
  type: REMOVE_FAVORITE,
  favorite
});


export const toggleSingleFavorite = () => dispatch => {
  return dispatch(toggleFavorite());
}

export const fetchAllFavorites = () => dispatch => {
  return fetchFavorites().then(favorites => dispatch(receiveFavorites(favorites)))
}

export const createSingleFavorite = favorite => dispatch => {
  return createFavorite(favorite).then(favorite=>dispatch(receiveFavorite(favorite)))
}

export const deleteSingleFavorite = favoriteId => dispatch => {
  return deleteFavorite(favoriteId).then(favorite=>dispatch(removeFavorite(favorite)))
}
