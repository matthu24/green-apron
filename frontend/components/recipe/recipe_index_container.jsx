import React from 'react';
import { connect } from 'react-redux';
import RecipeIndex from './recipe_index';
import {fetchAllRecipes} from '../../actions/recipe';
import {createSingleFavorite} from '../../actions/favorite';


const mapStateToProps = state => ({
  recipes: Object.values(state.entities.recipes),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchAllRecipes: () => dispatch(fetchAllRecipes()),
  createSingleFavorite: favorite => dispatch(createSingleFavorite(favorite))
});
//
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeIndex);
