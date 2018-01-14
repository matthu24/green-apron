//map through appropriate recipe items according to the recipe id
import React from 'react';



class RecipeShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSingleRecipe(this.props.match.params.recipeId);
    this.props.fetchAllRecipeItems();
  }

  //map through recipe items here
  render(){
    return(
      <div>
        <ul>
          {this.props.recipeItems.map((item,id) =>
            (item.recipe_id === this.props.recipe.id) ?
            (<li key={id} >{item.item_title}</li>) :
            (<div></div>)

          )}
        </ul>
      </div>
    )
  }
}

export default RecipeShow;
