import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleRecipe } from '../../actions/recipe';
import { fetchAllRecipeItems } from '../../actions/recipe_item';
import RecipeShow from './recipe_show';

const mapStateToProps = (state,ownProps) => ({
  //must specify which recipe it is through ownProps
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  recipe_items: state.entities.recipe_items
});

const mapDispatchToProps = dispatch => ({
  //fetch the single recipe
  fetchSingleRecipe: (id) => dispatch(fetchSingleRecipe(id)),
  //fetch all the recipe items associated with the single recipe given the recipe id
  fetchAllRecipeItems: (recipeId) => dispatch(fetchAllRecipeItems(recipeId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeShow);
