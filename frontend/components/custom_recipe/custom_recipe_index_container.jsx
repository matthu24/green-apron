import React from 'react';
import { connect } from 'react-redux';
import CustomRecipeIndex from './custom_recipe_index';
import {fetchCustomRecipes} from '../../actions/custom_recipe';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  customRecipes: Object.values(state.entities.custom_recipes)
});

//want them to be able to just log out from navbar
//if signed in
const mapDispatchToProps = dispatch => ({
  fetchCustomRecipes: (user_id) => dispatch(fetchCustomRecipes(user_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomRecipeIndex);
