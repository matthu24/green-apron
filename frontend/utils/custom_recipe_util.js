export const createCustomRecipe = (userId,custom_recipe) => {
  return $.ajax({
    url: `/api/users/${userId}/custom_recipes`,
    method: 'POST',
    data: { custom_recipe }
  })
}

export const updateCustomRecipe = (userId, custom_recipe) => {
  return $.ajax({
    url: `api/users/${userId}/custom_recipes/${custom_recipe.id}`,
    method: 'PATCH',
    data: {custom_recipe}
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

export const fetchCustomRecipe = (recipeId) => {
  return $.ajax({
    url:`/api/custom_recipes/${recipeId}`,
    method: 'GET'
  })
}
