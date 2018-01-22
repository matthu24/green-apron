export const createFavorite = (favorite) => {
  return $.ajax({
    url: '/api/favorites',
    method: 'POST',
    data: { favorite }
  })
}
