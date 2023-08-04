import { urlModify } from 'components/user/userForm/utils/UrlModify';
import spriteImage from '../../../../images/sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUserPet } from 'redux/user/operations';
import Modal from 'pages/ModalApproveAction';
import {
  BtnWrapper,
  CancelBtn,
  DelBtn,
  ModalWraperr,
  TitleDelBtn,
  TitleModal,
} from '../../../header/navigation/Navigation.styled';

import {
  PetsCard,
  PetsImg,
  PetsInfoContainer,
  PetsInfoTitle,
  PetsInfoText,
  ButtonDeletePet,
} from './PetsItem.styled';

const AVATAR_CLOUDINARY_URL =
  'https://res.cloudinary.com/dfvviqdic/image/upload/';

export default function PetsItem({
  name,
  birthday,
  photoUrl,
  type,
  comments,
  id,
}) {
  const [openModalPetDelete, setOpenModalPetDelete] = useState(false);
  const dispatch = useDispatch();

  const changeBirthdayFormat = data => {
    return data.replaceAll('-', '.');
  };

  const handleOpenModal = () => {
    setOpenModalPetDelete(!openModalPetDelete);
  };

  const deletePet = () => {
    dispatch(deleteUserPet(id));
  };

  return (
    <>
      <PetsCard>
        <PetsImg
          src={urlModify(AVATAR_CLOUDINARY_URL, photoUrl)}
          alt={`Pets avatar ${name}`}
          loading="lazy"
        />
        <PetsInfoContainer>
          <PetsInfoText>
            <PetsInfoTitle> Name: </PetsInfoTitle>
            {name}
          </PetsInfoText>
          <PetsInfoText>
            <PetsInfoTitle>Date of birth: </PetsInfoTitle>
            {changeBirthdayFormat(birthday)}
          </PetsInfoText>
          <PetsInfoText>
            <PetsInfoTitle>Type:</PetsInfoTitle>
            {type}
          </PetsInfoText>
          {comments && (
            <PetsInfoText>
              <PetsInfoTitle>Comments: </PetsInfoTitle>
              {comments}
            </PetsInfoText>
          )}
        </PetsInfoContainer>
        <ButtonDeletePet type="button" onClick={handleOpenModal}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <use href={spriteImage + '#icon-trash-2'} />
          </svg>
        </ButtonDeletePet>
      </PetsCard>

      {openModalPetDelete && (
        <Modal closeModal={handleOpenModal}>
          <ModalWraperr>
            <TitleModal>Delete pet?</TitleModal>

            <div>
              <BtnWrapper>
                <CancelBtn onClick={() => handleOpenModal()}>
                  <span>Cancel</span>
                </CancelBtn>
                <DelBtn
                  onClick={() => {
                    deletePet();
                    handleOpenModal();
                  }}
                >
                  <TitleDelBtn>Yes</TitleDelBtn>
                  <svg
                    width="24"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <use href={spriteImage + '#icon-trash-white'} />
                  </svg>
                </DelBtn>
              </BtnWrapper>
            </div>
          </ModalWraperr>
        </Modal>
      )}
    </>
  );
}
