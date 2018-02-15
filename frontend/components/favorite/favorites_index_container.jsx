import React from 'react';
import { connect } from 'react-redux';
import FavoritesIndex from './favorites_index';
import {values} from 'lodash';
import {fetchAllRecipes} from '../../actions/recipe';

//state.session essentially points to session reducer
//session has a currentUser key
const mapStateToProps = state => ({
  recipes: Object.values(state.entities.recipes),
  currentUser: state.session.currentUser
});

//want them to be able to just log out from navbar
//if signed in
const mapDispatchToProps = dispatch => ({
  fetchAllRecipes: () => dispatch(fetchAllRecipes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesIndex);
