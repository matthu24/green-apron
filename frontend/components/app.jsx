
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash/splash';
import Menu from './recipe/recipe_index_container';

const App = () => (
  <div>
    <Route path = "/" component={NavBarContainer}/>
      <Switch>
        <Route exact path = "/" component={Splash}/>
        <Route exact path = "/recipes" component={Menu}/>
      </Switch>
  </div>

);

export default App;
