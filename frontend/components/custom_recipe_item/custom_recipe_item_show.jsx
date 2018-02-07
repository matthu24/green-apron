import React from 'react';

class CustomRecipeItemShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchSingleCustomRecipe(this.props.match.params.recipeId)
  }

  render(){
    return(
      <div>hello</div>
    )
  }
}

export default CustomRecipeItemShow;
