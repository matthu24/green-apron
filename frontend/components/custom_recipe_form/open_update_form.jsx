import React from 'react';
import ReactModal from 'react-modal';
import ModalUpdateContainer from './modal_update_container';

class OpenUpdateForm extends React.Component{
  constructor(props){
    super(props);
    this.state={ModalIsOpen:false}
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({ModalIsOpen:true})
  }

  closeModal(){
    this.setState({ModalIsOpen:false})
  }

  render(){
    return(
      <div>
        <button className="edit-button" onClick={this.openModal}>Edit</button>
        <ReactModal className="modal-form"
          isOpen={this.state.ModalIsOpen}
          shouldCloseOnOverlayClick={true}
          ariaHideApp={false}
          >
          <ModalUpdateContainer recipe={this.props.recipe} closeModal={this.closeModal}/>
          <button className='close-modal' onClick={this.closeModal}>Close</button>
        </ReactModal>
      </div>
    )

  }

}

export default OpenUpdateForm;
