import React from 'react';

// show image, title, and description
export default props => {
  const recipeImage = props.recipe.image_file_name;
  return (

    <li className="recipe-item">
      <img className='recipe-image' src={recipeImage}/>
      <div className='recipe-title'>
        {props.recipe.title}
      </div>
      <div className='recipe-description'>
        {props.recipe.description}

      </div>
      <br></br>
      <button className= 'favorite'>Favorite</button>
    </li>
  )
}

// export default RecipeIndexItem;
