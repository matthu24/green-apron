import React from 'react';
import ReactModal from 'react-modal';
import ModalContainer from './modal_container';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(128,128,128,0.75)';


class CustomRecipeForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      ModalIsOpen:false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(){
    this.setState({ModalIsOpen:true})
  }

  closeModal(){
    this.setState({ModalIsOpen:false})
  }

  render(){
    return(
      <div >
        <div className="splash-barrier">Cook away.  Your recipes are safe with us.</div>
        <div className='recipe-form'>
          <h2>Make your own recipe</h2>
          <button className="modal-button" onClick={this.openModal}>Custon Form</button>
          <ReactModal className="modal-form"
            isOpen={this.state.ModalIsOpen}
            shouldCloseOnOverlayClick={true}
            ariaHideApp={false}
            >
            <ModalContainer/>

            <button className="close-modal" onClick={this.closeModal}>Close</button>
          </ReactModal>
        </div>

      </div>
    )
  }
}

export default CustomRecipeForm;
