import React from 'react';
import { Link, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// show image, title, and description
export default props => {
  //loop through recipes and check if the current favorite exists (matches user id and recipe id)
  //if it does, render the unfavorite button, if not do the other one

  let favorited = false;
  let favorited_id;
  //recipes is an array of recipe objects
  // if (!props.recipes) return null;
  if (props.recipes) {
    props.recipes.forEach(recipe => {
      //recipe is an object,
      //recipe.favorites is an object of favorite objects
      if (recipe.favorites) {
        for (var favorite_id in recipe.favorites) {
          // recipe.favorites[favorite_id] is the favorite object
          let favorite = recipe.favorites[favorite_id];
          if (favorite.user_id === props.currentUser.id && favorite.recipe_id === props.recipe.id){
              favorited = true;
              favorited_id = favorite_id;
          }

        }

      }
    })
  }
  const deleteFavorite = () => {
    props.deleteFavorite(favorited_id)

  };

  const createFavorite = () => {
    props.createFavorite({user_id: props.currentUser.id, recipe_id: props.recipe.id})


  }

  const recipeImage = props.recipe.image_file_name;

  const favoriteButton = favorited ? (

    <button className='un-favorite'
       onClick={deleteFavorite}>Unfavorite
     </button>

  ):(
    <button className= 'favorite'
      onClick={()=>props.createFavorite({user_id: props.currentUser.id, recipe_id: props.recipe.id})}>Favorite
    </button>
  )

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
  <NavLink to='/myRecipes' exact={true} activeStyle={{ textDecoration: 'underline'}}>

      {favoriteButton}
</NavLink>

  </li>
  )
}
