import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalWindow, ModalContent, ExitButton } from '../components/modal/Modal.styled';
import { motion } from 'framer-motion';

const modalRoot = document.body;

const Modal = ({ closeModal, isOpenedModal, children, width, padding }) => {
  const toggleModal = useCallback(
    e => {
      if (e.code !== 'Escape') return;
      closeModal();
    },
    [closeModal]
  );

  // useEffect(() => {
  //   if (isOpenedModal) {
  //     const scrollY = window.scrollY;
  //     document.body.style.position = 'fixed';
  //     document.body.style.top = `-${scrollY}px`;
  //   }

  //   return () => {
  //     window.removeEventListener('keydown', toggleModal);
  //     const scrollY = parseInt(document.body.style.top || '0', 10);
  //     document.body.style.position = '';
  //     document.body.style.top = '';
  //     window.scrollTo(0, -scrollY);
  //   };
  // }, [isOpenedModal, toggleModal]);

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.style.overflow = isOpenedModal ? 'hidden' : 'auto';
    };

    handleBodyScroll();

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpenedModal]);

  useEffect(() => {
    const handleKeyDown = e => toggleModal(e);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const onClickOverlay = e => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ModalWindow onClick={onClickOverlay}>
        <ModalContent
          style={{
            width: width,
            padding: padding,
            '@media (minWidth: 767px)': {},
          }}
        >
          <ExitButton onClick={() => closeModal()} />
          {children}
        </ModalContent>
      </ModalWindow>
    </motion.div>,
    modalRoot
  );
};

export default Modal;
