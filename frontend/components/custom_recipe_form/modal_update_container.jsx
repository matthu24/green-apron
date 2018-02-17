import React from 'react';
import { connect } from 'react-redux';
import ModalUpdate from './modal_update';
import {updateSingleCustomRecipe} from '../../actions/custom_recipe';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser

})

const mapDispatchToProps = dispatch => ({
  updateSingleCustomRecipe: (user_id, recipe) => dispatch(updateSingleCustomRecipe(user_id,recipe))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalUpdate);
