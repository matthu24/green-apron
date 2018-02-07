import React from 'react';

class CustomRecipeItemShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
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
      <div>
        <div>Ingredients:</div>
        <div>{ingredients}</div>
        <div>Directions:</div>
        <div>{directions}</div>

      </div>
    )
  }
}

export default CustomRecipeItemShow;
