import React from 'react';
import { Link } from 'react-router-dom';

class ModalUpdate extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state={title:'',image_file_name: '',description:'',ingredients:'',directions:''}
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
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label className="title-label">Title</label>
          <br/>
          <input onChange={this.handleChange('title')} id='title-input' className="title-input"></input>
          <br/>
          <label className="image-label">Image Url</label>
          <br/>
          <input onChange={this.handleChange('image_file_name')} id='image-input' className="image-input"></input>
          <br/>
          <label className="description-label">Description</label>
          <br/>
          <input onChange={this.handleChange('description')} id='description-input' className='description-input'/>
          <br/>

          <label className="ingredients-label">Ingredients List</label>
          <br/>
          <textarea onChange={this.handleChange('ingredients')} id='ingredients-input' className="ingredients-text"/>
          <br/>
          <label className="directions-label">Directions</label>
          <br/>
          <textarea onChange={this.handleChange('directions')} id='directions-input' className="directions-text"/>
          <br/>

          <input className='form-submit' type="submit"/>



        </form>


      </div>
    )
  }


}

export default ModalUpdate;
