//don't need to access this route..it doesn't filter by recipe id
export const fetchRecipeItems = (recipeId) => {
  return $.ajax({
    method: 'GET',
    url: `api/recipes/${recipeId}/recipe_items`
  })
}

// export const fetchRecipeItem = id => {
//   return $.ajax({
//     method: 'GET',
//     url: `api/recipe_items/${id}`
//   })
// }
