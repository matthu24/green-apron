export const createCustomRecipe = (userId,recipe) => {
  return $.ajax({
    url: `/api/users/${userId}/custom_recipes`,
    method: 'POST',
    data: { recipe }
  })
}


export const deleteCustomRecipe = (recipeId) => {
  return $.ajax({
    url: `/api/custom_recipes/${recipeId}`,
    method: 'DELETE',

  })
}

export const fetchUserCustomRecipes = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/custom_recipes`,
    method: 'GET'
  })
}
