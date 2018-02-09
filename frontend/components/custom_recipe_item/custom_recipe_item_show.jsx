import React from 'react';

class CustomRecipeItemShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){

    this.props.fetchSingleCustomRecipe(this.props.match.params.recipeId);
    this.props.fetchCustomRecipes(this.props.currentUser.id);
  }

  render(){
    let ingredients;
    let directions;
    this.props.customRecipes.forEach(recipe => {
      if (recipe.id === this.props.customRecipe.id){
        ingredients = recipe.ingredients;
        directions = recipe.directions;
      }
    })
    return(
      <div className='custom-recipe-show'>
        <div className='ingredients-bundle'>
          <div className='ingredients-label'>Ingredients:</div>
          <div className='ingredients'>{ingredients}</div>
        </div>
        <div className='directions-bundle'>
          <div className='directions-label'>Directions:</div>
          <div className='directions'>{directions}</div>
        </div>


      </div>
    )
  }
}

export default CustomRecipeItemShow;
