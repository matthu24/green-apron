

import React from 'react';


class Modal extends React.Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <form >
          <div>Upload photo</div>
          <label className="title-label">Title</label>
          <br/>
          <input className="title-input"></input>
          <br/>
            <label className="description-label">Description</label>
            <br/>
            <input className='description-input'/>
              <br/>

          <label className="ingredients-label">Ingredients List</label>
          <br/>
          <textarea className="ingredients-text"/>
          <br/>
          <label className="directions-lalbel">Directions</label>
          <br/>
          <textarea className="directions-text"/>
          <br/>
          <input className='form-submit' type="submit"/>

        </form>
      </div>
    )
  }

}

export default Modal;
