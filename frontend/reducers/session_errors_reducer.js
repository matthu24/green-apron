import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS,CLEAR_ERRORS } from '../actions/session';
import merge from 'lodash/merge';

export default (errors = [], action) =>{
  Object.freeze(errors);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:

      return action.errors;
    case RECEIVE_CURRENT_USER:
      return null;
    case CLEAR_ERRORS:
      return null;

    default:
      return errors;
  }

};
