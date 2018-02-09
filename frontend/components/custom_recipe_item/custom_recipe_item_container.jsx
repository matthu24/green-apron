import React from 'react';
import { connect } from 'react-redux';
import CustomRecipeItemShow from './custom_recipe_item_show';
import {fetchSingleCustomRecipe, fetchCustomRecipes} from '../../actions/custom_recipe';

const mapStateToProps = (state,ownProps) => ({
  //must specify which recipe it is through ownProps
  customRecipe: state.entities.custom_recipes[ownProps.match.params.recipeId],
  customRecipes: Object.values(state.entities.custom_recipes),
  currentUser: state.session.currentUser

});

const mapDispatchToProps = dispatch => ({
  fetchSingleCustomRecipe: (id) => dispatch(fetchSingleCustomRecipe(id)),
  fetchCustomRecipes: (user_id) => dispatch(fetchCustomRecipes(user_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomRecipeItemShow);
