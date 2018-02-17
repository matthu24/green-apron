import React from 'react';
import CustomRecipeItem from './custom_recipe_item';

class CustomRecipeIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (this.props.currentUser) {
      this.props.fetchCustomRecipes(this.props.currentUser.id);

    }
  }

  render(){
    return(
      <div>
        <ul className='custom-index'>
          {
            this.props.customRecipes.map((recipe,idx)=>(
              <CustomRecipeItem
                key={idx}
                recipe={recipe}
                updateCustomRecipe={this.props.updateSingleCustomRecipe}
                deleteCustomRecipe={this.props.deleteSingleCustomRecipe}/>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default CustomRecipeIndex;
