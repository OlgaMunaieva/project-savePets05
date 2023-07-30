import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { ModalWindow, ModalContent, ExitButton } from './Modal.styled';

import CrossIcon from '..//../images/icons/CrossIcon.svg';

const modalRoot = document.body;

const Modal = ({ closeModal, isOpenedModal, children, width }) => {
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (isOpenedModal) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
    }

    return () => {
      window.removeEventListener('keydown', toggleModal);
      const scrollY = parseInt(document.body.style.top || '0', 10);
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, -scrollY);
    };
  }, [isOpenedModal]);

  const toggleModal = e => {
    if (e.code !== 'Escape') return;
    closeModal();
  };

  const onClickOverlay = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <ModalWindow onClick={onClickOverlay}>
      <ModalContent style={{ width: width }} ref={modalContentRef}>
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
