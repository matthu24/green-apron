import {RECEIVE_FAVORITES,RECEIVE_FAVORITE,REMOVE_FAVORITE} from '../actions/favorite';
import merge from 'lodash/merge';


export default(favorites = {},action) => {
  Object.freeze(favorites);

    switch (action.type) {
      case RECEIVE_FAVORITE:
        return merge({},favorites, {[action.favorite.id]:action.favorite})
      case RECEIVE_FAVORITES:
        return merge({},action.favorites)
      case REMOVE_FAVORITE:
        let newState = merge({},favorites);
        delete newState[action.favorite.id];
        return newState;
      default:
        return favorites;
    }

}
