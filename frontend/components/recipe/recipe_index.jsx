import React from 'react';


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
              <li key={idx}>{recipe.title}</li>
            ))
          }
        </ul>
      </div>
    )

  }
}


export default RecipeIndex;
