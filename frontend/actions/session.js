import { postUser, deleteSession, postSession } from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});


const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

//action to assign errors to null in order to clear
const clearErrorAction = errors => ({
  type: CLEAR_ERRORS,
  errors: null
});

export const clearErrors = errors => dispatch => {
  return dispatch(clearErrorAction(errors))
};


export const signup = formUser => dispatch => {
  //the user sent back as a response from the ajax request is from the jbuilder json view
  //it sends back the @user object

  //send ajax request, of postUser, or creating a new user from the user controller #user create
  postUser(formUser).then(user => dispatch(receiveCurrentUser(user)), err => (
    dispatch(receiveSessionErrors(err.responseJSON))));
};

export const login = formUser => dispatch => {
  postSession(formUser).then(user => dispatch(receiveCurrentUser(user)), err => (
    dispatch(receiveSessionErrors(err.responseJSON))));
};

export const logout = () => dispatch => {
  deleteSession().then(() => dispatch(receiveCurrentUser(null)));
};
