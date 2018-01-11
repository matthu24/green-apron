import React from 'react';
import { connect } from 'react-redux';
import RecipeIndex from './recipe_index';
import {fetchAllRecipes} from '../../actions/recipe';

const mapStateToProps = state => ({
  recipes: Object.values(state.entities.recipes)
});

const mapDispatchToProps = dispatch => ({
  fetchAllRecipes: () => dispatch(fetchAllRecipes())
});
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex);
