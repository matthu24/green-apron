import React from 'react';
import { connect } from 'react-redux';
import OpenUpdateForm from './open_update_form';

const mapStateToProps = (state,{recipe}) => ({
  recipe
})

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenUpdateForm);
