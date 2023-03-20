import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBlock, ModalImg } from './Modal.styled';

const modalRoot = document.getElementById('modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = element => {
    if (element.code === 'Escape' || element.currenTarget !== element.target) {
      this.props.closeModal();
      return;
    }
  };

  render() {
    const { tags, modalImg } = this.props;

    return createPortal(
      <Overlay onClick={this.closeModal}>
        <ModalBlock>
          <ModalImg src={modalImg} alt={tags} />
        </ModalBlock>
      </Overlay>,
      modalRoot
    );
  }
}