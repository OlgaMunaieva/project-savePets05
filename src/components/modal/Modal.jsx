import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalWindow, ModalContent, ExitButton } from './Modal.styled';

import CrossIcon from '..//../images/icons/CrossIcon.svg';

const modalRoot = document.body;

const Modal = ({ closeModal, isOpenedModal, children, width }) => {
  useEffect(() => {
    const toggleModal = e => {
      if (e.code !== 'Escape') return;
      closeModal();
    };
    window.addEventListener('keydown', toggleModal);

    return () => {
      window.removeEventListener('keydown', toggleModal);
    };
  }, [isOpenedModal, toggleModal]);

  const onClickOverlay = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <ModalWindow onClick={onClickOverlay}>
      <ModalContent style={{ width: width }}>
        <ExitButton onClick={() => closeModal()}>
          <img src={CrossIcon} alt="Cross" width={24} height={24} />
        </ExitButton>
        {children}
      </ModalContent>
    </ModalWindow>,
    modalRoot
  );
};

export default Modal;
