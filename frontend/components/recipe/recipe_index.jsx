import React from 'react';
import RecipeIndexItem from './recipe_index_item';

class RecipeIndex extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchAllRecipes();
  }
  render(){
    return(
      <div>
        <ul className = 'recipe-index'>
          {
            this.props.recipes.map((recipe,idx) => (
              <RecipeIndexItem key = {idx} recipe={recipe}/>
            ))
          }
        </ul>
      </div>
    )

  }
}


export default RecipeIndex;
