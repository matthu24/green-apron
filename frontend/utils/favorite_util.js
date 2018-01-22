export const createFavorite = (favorite) => {
  return $.ajax({
    url: '/api/favorites',
    method: 'POST',
    data: { favorite }
  })
}


export const deleteFavorite = (favoriteId) => {
  return $.ajax({
    url: `/api/favorites/${favoriteId}`,
    method: 'DELETE',

  })
}

export const fetchFavorites = () => {
  return $.ajax({
    url: '/api/favorites',
    method: 'GET'
  })
}
