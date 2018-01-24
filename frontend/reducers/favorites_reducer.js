import {RECEIVE_FAVORITES,RECEIVE_FAVORITE} from '../actions/favorite';


export default(favorites = {},action) => {
  Object.freeze(favorites);

    switch (action.type) {
      case RECEIVE_FAVORITE:
        return merge({},favorites, {[action.favorite.id]:action.favorite})
      case RECEIVE_FAVORITES:
        return merge({},action.favorites)
      default:
        return favorites;
    }

}
