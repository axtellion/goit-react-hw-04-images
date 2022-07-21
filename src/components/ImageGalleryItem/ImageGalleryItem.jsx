import { Box } from 'components/Box';
import { Image, Item } from './ImageGalleryItem.styled';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const ImageGalleryItem = ({ img, tags, modalImg }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Box>
      <Item onClick={toggleModal}>
        <Image src={img} alt={tags} />
      </Item>
      {showModal && (
        <Modal img={modalImg} tags={tags} onCloseModal={toggleModal} />
      )}
    </Box>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  modalImg: PropTypes.string.isRequired,
};
