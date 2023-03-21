import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBlock, ModalImg } from './Modal.styled';

const modalRoot = document.getElementById('modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }


  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    };

  }

  handleBackdropClick = e => {
    if(e.currenTarget !== e.target) {
      
      this.props.closeModal();
  };
  }
 

  render() {
    const { tags, modalImg } = this.props;

    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ModalBlock>
          <ModalImg src={modalImg} alt={tags} />
        </ModalBlock>
      </Overlay>,
      modalRoot
    );
  }
}