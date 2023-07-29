import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalWindow } from '../../modal/Modal.styled';

import CrossIcon from '../../../images/icons/CrossIcon.svg';
import { ExitButton, ModalContent } from './ModalNotice.styled';

const modalRoot = document.body;

const ModalNotice = ({ onClose, isOpenedModal, children }) => {
  const toggleModal = useCallback(
    e => {
      if (e.code !== 'Escape') return;
      onClose();
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', toggleModal);

    return () => {
      window.removeEventListener('keydown', toggleModal);
    };
  }, [isOpenedModal, toggleModal]);

  useEffect(() => {
    const handleKeyDown = e => toggleModal(e);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const onClickOverlay = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <ModalWindow onClick={onClickOverlay}>
      <ModalContent>
        <ExitButton onClick={() => onClose()}>
          <img src={CrossIcon} alt="Cross" width={24} height={24} />
        </ExitButton>
        {children}
      </ModalContent>
    </ModalWindow>,
    modalRoot
  );
};

export default ModalNotice;
