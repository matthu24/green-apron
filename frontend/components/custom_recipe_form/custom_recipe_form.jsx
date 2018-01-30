import React from 'react';

class CustomRecipeForm extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div >
        <div className="splash-barrier">Cook away.  Your recipes are safe with us.</div>
        <div className='recipe-form'>
      <h2>Make your own recipe</h2>
        <form>
          <label>Ingredients List</label>
          <br/>
          <input type="text"/>
          <br/>
          <label>Directions</label>
          <br/>
          <textarea/>
          <br/>
          <input type="submit"/>

        </form>
        </div>

      </div>
    )
  }
}

export default CustomRecipeForm;
