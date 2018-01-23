import React from 'react';
import { Link, Route } from 'react-router-dom';

// show image, title, and description
export default props => {
  const recipeImage = props.recipe.image_file_name;
  return (

    <li className="recipe-item">
      <Link className='recipe-show' to ={`/recipes/${props.recipe.id}`}>
      <img className='recipe-image' src={recipeImage}/>
        </Link>
      <div className='recipe-title'>
        {props.recipe.title}
      </div>
      <div className='recipe-description'>
        {props.recipe.description}

      </div>
      <br></br>
      <button className= 'favorite'
            onClick={()=>props.createFavorite({user_id: props.currentUser.id, recipe_id: props.recipe.id})}>Favorite</button>

  </li>
  )
}

// export default RecipeIndexItem;
