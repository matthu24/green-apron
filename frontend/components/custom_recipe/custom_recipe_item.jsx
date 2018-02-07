import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return(
    <li className='custom-item'>
      <Link to={`/customRecipes/${props.recipe.id}`}>
      <div>{props.recipe.title}</div>
      </Link>
      <div>{props.recipe.description}</div>

    </li>
  )
}
