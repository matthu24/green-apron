import Modal from './modal';
import React from 'react';
import { connect } from 'react-redux';
import {createSingleCustomRecipe} from '../../actions/custom_recipe'

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

//want them to be able to just log out from navbar
//if signed in
const mapDispatchToProps = dispatch => ({
  createSingleCustomRecipe: (user_id,recipe) => dispatch(createSingleCustomRecipe(user_id,recipe))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
