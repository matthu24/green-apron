import React from 'react';

//have access to this.props.item
// t.string "item_image_file_name"
// t.string "item_title"
// t.string "item_description"
export default props => {
  const itemImage = props.item.item_image_file_name;
  return(
    <div className= 'recipe-items' >
      <div >
        <img src={itemImage} className= "item-picture"/>
      </div>
      <h3 className= "item-title">
        {props.item.item_title}
      </h3>
      <div className= "item-description">
        {props.item.item_description}
      </div>
    </div>
  )
}
