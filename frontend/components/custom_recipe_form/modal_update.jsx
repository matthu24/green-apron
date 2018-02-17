import React from 'react';
import { Link } from 'react-router-dom';

class ModalUpdate extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state={}
  }

  handleSubmit(e){
    e.preventDefault();

  }

  handleChange(field){
    return(e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render(){
    return(
      
    )
  }


}
