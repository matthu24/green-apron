//map through appropriate recipe items according to the recipe id
import React from 'react';
import RecipeItem from '../recipe_item/recipe_item';


class RecipeShow extends React.Component{
  constructor(props){
    super(props);
  }

  //the route fetchAllRecipeItems is keying into is not filtering by recipeId
  componentDidMount(){
    this.props.fetchSingleRecipe(this.props.match.params.recipeId);
    this.props.fetchAllRecipeItems();
  }

  //map through recipe items here
  //all recipe items are currently in the state
  //need to filter recipe items here in render

  // {this.props.recipeItems.map((item,id) =>
  //   (item.recipe_id === this.props.recipe.id) ?
  //   (<li key={id} ><RecipeItem item={item}/></li>) :
  //   (<div></div>)
  //
  // )}


  render(){
    return(
      <div className='recipe-show-container'>
        <div className="splash-barrier">Cook away.  Your recipes are safe with us.</div>

        <div className='recipe-show-tag'>
          <div className='step-by-step'>step-by-step</div>
          <div className='instructions'>INSTRUCTIONS</div>
        </div>

        <ul className="recipe-items-list">
          {this.props.recipeItems.map((item,id) =>
            (item.recipe_id === this.props.recipe.id) ?
            (<li key={id} ><RecipeItem item={item}/></li>) :
            (<div></div>)

          )}
        </ul>
      </div>
    )
  }
}

export default RecipeShow;
