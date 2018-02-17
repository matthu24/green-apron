import React from 'react';
import { Link } from 'react-router-dom';
import OpenUpdateForm from '../custom_recipe_form/open_update_form';

export default props => {
  let recipe_id = props.recipe.id;
  let imageUrl = props.recipe.image_file_name ? props.recipe.image_file_name : 'https://s3.us-east-2.amazonaws.com/greenapron/genericfood.png'

  const deleteCustomRecipe = () => {
    props.deleteCustomRecipe(recipe_id);
  };

  //the edit button should open the modal again
  return(
    <li className='custom-item'>
      <Link to={`/customRecipes/${props.recipe.id}`}>
        <div><img className='generic-food' src={imageUrl}/></div>
        <div>{props.recipe.title}</div>
      </Link>
      <div className='custom-item-description'>{props.recipe.description}</div>
      <button onClick={deleteCustomRecipe} className='custom-item-delete'>Delete</button>
      <OpenUpdateForm/>
    </li>
  )
}
