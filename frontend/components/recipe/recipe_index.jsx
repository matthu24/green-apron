import React from 'react';
import RecipeIndexItem from './recipe_index_item';
import RecipeIndexItemClass from './recipe_index_item_class';
import FavoriteIndexItem from '../favorite/favorite_index_item';
// import RecipeIndexItemContainer from './recipe_index_item_container';

class RecipeIndex extends React.Component{
  constructor(props){
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllRecipes();
  }

  componentWillReceiveNewProps(newProps){
    this.props.fetchAllRecipes();
  }

  render(){
    let today = new Date();
    let day = today.getDay();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const recipes = this.props.recipes;
    let recipeIndex;
    if (this.props.currentUser) {
      recipeIndex = <ul className = 'recipe-index'>
        {
          this.props.recipes.map((recipe,idx) => (
            <RecipeIndexItem
              key = {idx}
              recipes = {recipes}
              recipe={recipe}
              fetchAllRecipes={this.props.fetchAllRecipes}
              createFavorite={this.props.createSingleFavorite}
              deleteFavorite={this.props.deleteSingleFavorite}
              currentUser={this.props.currentUser}
            />
          ))
        }
      </ul>
    }else{
      recipeIndex =
        <ul className='my-recipe-index'>
          {
            this.props.recipes.map((recipe,idx) => (
              <FavoriteIndexItem key = {idx} recipe={recipe}/>
            ))
          }
        </ul>
    }

    return(
      <div className= 'recipe-index-container'>
        <div className="splash-barrier">Cook away.  Your recipes are safe with us.</div>
        <h1 className='index-headline'>What we're cooking on {days[day]}!</h1>
        {recipeIndex}
      </div>
    )

  }
}


export default RecipeIndex;
