import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    const { toggleModal } = this;

    return (
      <GalleryItem>
        <Image
          src={webformatURL}
          alt={tags}
          width="500"
          height="210"
          loading="lazy"
          onClick={toggleModal}
        />

        {isModalOpen && (
          <Modal
            modalImg={largeImageURL}
            tags={tags}
            closeModal={toggleModal}
          />
        )}
      </GalleryItem>
    );
  }
}
