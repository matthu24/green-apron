export const fetchRecipes = () => {
  return $.ajax({
    method: 'GET',
    // from views
    url: 'api/recipes'
  })
}

export const fetchRecipe = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/recipes/${id}`
  })
}
