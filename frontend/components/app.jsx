
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
  <div>
    <Route path = "/" component={NavBarContainer}/>
  </div>

);

export default App;
