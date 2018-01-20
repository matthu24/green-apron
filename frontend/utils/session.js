import React from 'react';

//signup
export const postUser = (user) => {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: { user }
  });
};

//sign in
export const postSession = (user) => {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  });
};

//sign out
export const deleteSession = () => {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'

  });
};
