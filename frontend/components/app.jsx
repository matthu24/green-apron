
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash/splash';

const App = () => (
  <div>
    <Route path = "/" component={NavBarContainer}/>
      <Switch>
        <Route exact path = "/" component={Splash}/>
      </Switch>
  </div>

);

export default App;
