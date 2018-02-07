import React from 'react';
import { Link } from 'react-router-dom';


class Modal extends React.Component{
  constructor(props){
    super(props)
    this.state={title:'',description:'',ingredients:'',directions:''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createSingleCustomRecipe(this.props.currentUser.id,this.state);
    const title = document.getElementById('title-input');
    title.value = '';
    const description = document.getElementById('description-input');
    description.value = '';
    const ingredients = document.getElementById('ingredients-input');
    ingredients.value = '';
    const directions = document.getElementById('directions-input');
    directions.value = '';
  }

  handleChange(field){
    return(e) => {
      this.setState({[field]:e.target.value})
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>Upload photo</div>
          <label className="title-label">Title</label>
          <br/>
          <input onChange={this.handleChange('title')} id='title-input' className="title-input"></input>
          <br/>
            <label className="description-label">Description</label>
            <br/>
            <input onChange={this.handleChange('description')} id='description-input' className='description-input'/>
              <br/>

          <label className="ingredients-label">Ingredients List</label>
          <br/>
          <textarea onChange={this.handleChange('ingredients')} id='ingredients-input' className="ingredients-text"/>
          <br/>
          <label className="directions-lalbel">Directions</label>
          <br/>
          <textarea onChange={this.handleChange('directions')} id='directions-input' className="directions-text"/>
          <br/>
  
          <input className='form-submit' type="submit"/>


        </form>
      </div>
    )
  }

}

export default Modal;
