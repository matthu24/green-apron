
import React from 'react';
import RecipeIndexItem from '../recipe/recipe_index_item';


class MyRecipeIndex extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let favorite_recipes = [];
    let favorites_array = [];
    let recipes = this.props.recipes
    //recipes are [{id:...},{id:....}]
    for(let i = 0; i < recipes.length; i++){
      //recipes[i].favorites is {5:{user_id:7, recipe_id:8}, 6:{...}}
      if(recipes[i].favorites){
        //favorites_array is [{user_id:7, recipe_id:8},{...}]
        favorites_array = Object.values(recipes[i].favorites);

        for(let j= 0; j < favorites_array.length;j++){
          //
          if (favorites_array[j].user_id === this.props.currentUser.id){
            //favorite_recipes is an array of recipe objects
            favorite_recipes.push(recipes[i])
          }
        }
      }

    }
    // if (favorite_recipes.length === 0) return (
    //   <div>{favorites  empty}</div>
    // );

    // let fav = [{'title':"hello"},{"title":"ee"}];

// Now map through favorite recipes and show the appropriate recipeindexitem component, which will be clickable and show the recipe items.
//this goes inside a ul

    return(
      <div>
        <ul>
          {
            favorite_recipes.map((recipe,idx) => (
              <RecipeIndexItem key = {idx} recipe={recipe}/>
            ))
          }
        </ul>
      </div>
    )
  }

}
export default MyRecipeIndex
