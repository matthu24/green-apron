import React from 'react';


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
          <input onChange={this.handleChange('title')} className="title-input"></input>
          <br/>
            <label className="description-label">Description</label>
            <br/>
            <input onChange={this.handleChange('description')} className='description-input'/>
              <br/>

          <label className="ingredients-label">Ingredients List</label>
          <br/>
          <textarea onChange={this.handleChange('ingredients')} className="ingredients-text"/>
          <br/>
          <label className="directions-lalbel">Directions</label>
          <br/>
          <textarea onChange={this.handleChange('directions')} className="directions-text"/>
          <br/>
          <input className='form-submit' type="submit"/>

        </form>
      </div>
    )
  }

}

export default Modal;
