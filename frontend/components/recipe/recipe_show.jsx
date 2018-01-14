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

  //map through recipe items here
  render(){
    return(
      <div>
        <ul>
          {this.props.recipeItems.map((item,id) => <li key={id} >{item.item_title}</li>)}
        </ul>
      </div>
    )
  }
}

export default RecipeShow;
