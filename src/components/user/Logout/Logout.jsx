import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledButton } from './Logout.styled';
import spriteImage from '../../../images/sprite.svg';
import Modal from 'pages/ModalApproveAction';
import {
  BtnWrapper,
  CancelBtn,
  DelBtn,
  ModalWraperr,
  TitleDelBtn,
  TitleModal,
} from '../../../components/header/navigation/Navigation.styled';
import { logOut } from 'redux/auth/authOperations';
import { logoutPet } from 'redux/user/operations';
import { LogOutIcon } from '../../../components/header/buttons/LogoutBtn.styled';

export default function Logout() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const handlerOpenModal = () => {
    setOpenModal(!openModal);
  };
  const handleLogOut = () => {
    dispatch(logOut());
    dispatch(logoutPet());
  };

  return (
    <>
      <StyledButton onClick={handlerOpenModal}>
        <svg width="24" height="24" stroke="currentColor" viewBox="0 0 24 24">
          <use href={spriteImage + '#icon-logout'} />
        </svg>
        <p>Log Out</p>
      </StyledButton>
      {openModal && (
        <Modal closeModal={handlerOpenModal}>
          <ModalWraperr>
            <TitleModal>Already leaving?</TitleModal>

            <div>
              <BtnWrapper>
                <CancelBtn onClick={() => handlerOpenModal()}>
                  <span>Cancel</span>
                </CancelBtn>
                <DelBtn
                  onClick={() => {
                    handleLogOut();
                    handlerOpenModal();
                  }}
                >
                  <TitleDelBtn>Yes</TitleDelBtn>
                  <LogOutIcon />
                </DelBtn>
              </BtnWrapper>
            </div>
          </ModalWraperr>
        </Modal>
      )}
    </>
  );
}
