import React from 'react';
import { connect } from 'react-redux';
import Favorite from './favorite';


const mapStateToProps = state => {
  currentUser: state.session.currentUser;
}

const mapDispatchToProps = dispatch => {

}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorite);