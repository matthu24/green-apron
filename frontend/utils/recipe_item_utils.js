export const fetchRecipeItems = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/recipe_items'
  })
}

export const fetchRecipeItem = id => {
  return $.ajax({
    method: 'GET',
    url: `api/recipe_items/${id}`
  })
}
