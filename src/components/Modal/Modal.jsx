import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBox, Image } from './Modal.styled';

const modalRoot = document.getElementById('modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = (elem) => {
    if (elem.code === 'Escape' || elem.currenTarget !== elem.target) {
      this.props.closeModal();
      return;
    }
  };

  render() {
    const { tags, modalImg } = this.props;

    return createPortal(
      <Overlay onClick={this.closeModal}>
        <ModalBox>
          <Image src={modalImg} alt={tags} />
        </ModalBox>
      </Overlay>,
      modalRoot
    );
  }
}