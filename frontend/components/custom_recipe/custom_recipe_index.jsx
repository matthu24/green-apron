import React from 'react';
import CustomRecipeItem from './custom_recipe_item';

class CustomRecipeIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
      this.props.fetchCustomRecipes(this.props.currentUser.id);
  }

  render(){
    return(
      <div>
        <ul className='custom-index'>
          {
            this.props.customRecipes.map((recipe,idx)=>(
              <CustomRecipeItem key={idx} recipe={recipe}/>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default CustomRecipeIndex;
