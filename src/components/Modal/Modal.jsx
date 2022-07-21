import { useEffect } from 'react';
import { ModalOver, ModalWindow } from './Modal.styled';
import PropTypes from 'prop-types';

export const Modal = ({ img, tags, onCloseModal }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return (
    <ModalOver onClick={handleBackdropClick}>
      <ModalWindow>
        <img src={img} alt={tags} />
      </ModalWindow>
    </ModalOver>
  );
};

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
