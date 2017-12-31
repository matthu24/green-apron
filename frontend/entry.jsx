import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  //root is located in views/static_pages
  const root = document.getElementById('root');
  let store;
    if (window.currentUser) {

      const preloadedState = { session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);

    } else {
      store = configureStore();
    }
    //replace root with Root component, which has store passed into it as a prop
  ReactDOM.render(<Root/>, root); //OR 'root'
});
