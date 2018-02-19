import React from 'react';
import { Link } from 'react-router-dom';

class ModalUpdate extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state=this.props.recipe
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateSingleCustomRecipe(this.props.currentUser.id,this.state);
  }

  handleChange(field){
    return(e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render(){
    let test = this.props.recipe
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="title-label">Title</label>
          <br/>
          <input value={this.state.title} onChange={this.handleChange('title')} id='title-input' className="title-input"></input>
          <br/>
          <label className="image-label">Image Url</label>
          <br/>
          <input value={this.state.image_file_name} onChange={this.handleChange('image_file_name')} id='image-input' className="image-input"></input>
          <br/>
          <label className="description-label">Description</label>
          <br/>
          <input value={this.state.description} onChange={this.handleChange('description')} id='description-input' className='description-input'/>
          <br/>

          <label className="ingredients-label">Ingredients List</label>
          <br/>
          <textarea value={this.state.ingredients} onChange={this.handleChange('ingredients')} id='ingredients-input' className="ingredients-text"/>
          <br/>
          <label className="directions-label">Directions</label>
          <br/>
          <textarea value={this.state.directions} onChange={this.handleChange('directions')} id='directions-input' className="directions-text"/>
          <br/>

          <input className='form-submit' type="submit"/>



        </form>


      </div>
    )
  }


}

export default ModalUpdate;
