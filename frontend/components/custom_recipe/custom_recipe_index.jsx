import React from 'react';

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
        hello?
      </div>
    )
  }
}

export default CustomRecipeIndex;
