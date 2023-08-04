import {
  BtnWrapper,
  Description,
  ModalWrapper,
  TitleModal,
} from './UserLoginModal.styled';
import Modal from '../../../pages/ModalApproveAction';
import AuthBtn from 'components/header/buttons/AuthBtn';

export const ModalUserLogin = ({ closeModal, title = 'Attention' }) => {
  return (
    <Modal closeModal={() => closeModal()}>
      <ModalWrapper>
        <TitleModal>{title}</TitleModal>
        <Description>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </Description>
        <div>
          <BtnWrapper>
            <AuthBtn />
          </BtnWrapper>
        </div>
      </ModalWrapper>
    </Modal>
  );
};
