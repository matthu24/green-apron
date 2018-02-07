import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return(
    <li className='custom-item'>
      <div>{props.recipe.title}</div>
      <div>{props.recipe.description}</div>
    </li>
  )
}
