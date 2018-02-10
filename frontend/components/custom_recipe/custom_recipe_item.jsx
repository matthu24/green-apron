import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return(
    <li className='custom-item'>
      <Link to={`/customRecipes/${props.recipe.id}`}>
        <div><img className='generic-food' src='https://s3.us-east-2.amazonaws.com/greenapron/genericfood.png'/></div>
        <div>{props.recipe.title}</div>
      </Link>
      <div className='custom-item-description'>{props.recipe.description}</div>
      <button className='custom-item-delete'>Delete</button>
    </li>
  )
}
