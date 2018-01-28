
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash/splash';
import CustomRecipeIndex from './custom_recipe/custom_recipe_index';
import MyRecipeIndexContainer from './my_recipe/my_recipe_index_container'
import CustomRecipeForm from './custom_recipe_form/custom_recipe_form';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Menu from './recipe/recipe_index_container';
import RecipeShowContainer from './recipe/recipe_show_container';

const App = () => (
  <div>
    <Route path = "/" component={NavBarContainer}/>
      <Switch>
        <AuthRoute path="/guest" component={LoginContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer}/>
        <Route exact path = "/" component={Splash}/>
        <Route exact path = "/recipes" component={Menu}/>
        <Route exact path = "/recipes/:recipeId" component={RecipeShowContainer}/>
        <Route exact path = "/myRecipes" component={MyRecipeIndexContainer}/>
      </Switch>
        <Route exact path = "/customRecipes" component = {CustomRecipeForm}/>
        <Route exact path = "/customRecipes" component = {CustomRecipeIndex}/>
  </div>

);

export default App;
