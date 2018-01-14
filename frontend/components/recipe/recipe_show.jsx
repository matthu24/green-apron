//map through appropriate recipe items according to the recipe id
import React from 'react';



class RecipeShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSingleRecipe(this.props.match.params.recipeId);
    this.props.fetchAllRecipeItems(this.props.match.params.recipeId);
  }

  render(){
    return(
      <div>
        recipe items
      </div>
    )
  }
}

export default RecipeShow;
