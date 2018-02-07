import React from 'react';
import { connect } from 'react-redux';
import CustomRecipeItemShow from './custom_recipe_item_show';
import {fetchSingleCustomRecipe} from '../../actions/custom_recipe';

const mapStateToProps = (state,ownProps) => ({
  //must specify which recipe it is through ownProps
  custom_recipe: state.entities.custom_recipes[ownProps.match.params.recipeId],
});

const mapDispatchToProps = dispatch => ({
  fetchSingleCustomRecipe: (id) => dispatch(fetchSingleCustomRecipe(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomRecipeItemShow);
