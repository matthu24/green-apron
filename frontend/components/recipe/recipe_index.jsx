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
    let today = new Date();
    let day = today.getDay();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    return(
      <div className= 'recipe-index-container'>
        <div className="splash-barrier">Cook away.  Your recipes are safe with us.</div>

        <h1 className='index-headline'>What we're cooking on {days[day]}!</h1>
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
