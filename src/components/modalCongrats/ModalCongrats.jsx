import Modal from '../../pages/ModalApproveAction';
import spriteImage from '../../images/sprite.svg';
import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledButton,
} from './ModalCongrats.styled';

const ModalCongrats = ({ closeModal, openModal }) => {
  return (
    <Modal closeModal={closeModal} isOpenedModal={openModal}>
      <StyledContainer>
        <StyledTitle>Congrats!</StyledTitle>
        <StyledText>You're registration is success</StyledText>
        <StyledButton
          onClick={() => {
            closeModal();
          }}
        >
          Go to profile
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <use href={spriteImage + '#icon-pawprint-1'} />
          </svg>
        </StyledButton>
      </StyledContainer>
    </Modal>
  );
};

export default ModalCongrats;
