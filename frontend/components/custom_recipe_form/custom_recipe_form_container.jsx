import CustomRecipeForm from './custom_recipe_form';
import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

//want them to be able to just log out from navbar
//if signed in
const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomRecipeForm);
