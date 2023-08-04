import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from 'redux/user/selectors';

import UserForm from '../userForm/UserForm';
import Modal from 'pages/ModalApproveAction';
import spriteImage from '../../../images/sprite.svg';

import UserDefaultAvatar from '../../../images/icons/user-default-avatar.svg';

import {
  ButtonEditUserInfo,
  StyledUserDataForm,
  StyledUserDataLabel,
  StyledUserDataInput,
  UserAvatarUserDataThumb,
  UserAvatarUserData,
  ModalWrapper,
} from './UserData.styled';
import { InputContainer, UserInfoContainer } from '../userForm/UserForm.styled';

export default function UserData() {
  const user = useSelector(selectUser);

  const {
    userInfo: { name, email, birthday, phone, city },
    avatar: avatarURL,
  } = user;

  const [showUserProfileModal, setShowUserProfileModal] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const isBirthdayValid = value => {
    if (value === 'Invalid date') {
      value = null;
      return value;
    }
    return value;
  };

  const closeUserProfileModal = () => {
    setShowUserProfileModal(false);
    setIsFormDisabled(true);
  };

  const handleFormDisabled = () => {
    setIsFormDisabled(false);
    setShowUserProfileModal(true);
  };

  return (
    <>
      {showUserProfileModal && (
        <Modal
          closeModal={closeUserProfileModal}
          isOpenedModal={showUserProfileModal}
        >
          <ModalWrapper>
            <UserForm
              isFormDisabled={isFormDisabled}
              closeModal={closeUserProfileModal}
            />
          </ModalWrapper>
        </Modal>
      )}

      <StyledUserDataForm>
        <UserAvatarUserDataThumb>
          <UserAvatarUserData
            src={!avatarURL ? UserDefaultAvatar : avatarURL}
            width="182"
            height="182"
            alt="User avatar"
            loading="lazy"
          />
        </UserAvatarUserDataThumb>

        <UserInfoContainer>
          <InputContainer>
            <StyledUserDataLabel>Name:</StyledUserDataLabel>
            <StyledUserDataInput>{name}</StyledUserDataInput>
          </InputContainer>

          <InputContainer>
            <StyledUserDataLabel>Email:</StyledUserDataLabel>
            <StyledUserDataInput>{email}</StyledUserDataInput>
          </InputContainer>

          {isBirthdayValid(birthday) && (
            <InputContainer>
              <StyledUserDataLabel>Birthday:</StyledUserDataLabel>
              <StyledUserDataInput>{birthday}</StyledUserDataInput>
            </InputContainer>
          )}

          {phone && (
            <InputContainer>
              <StyledUserDataLabel>Phone:</StyledUserDataLabel>
              <StyledUserDataInput>{phone}</StyledUserDataInput>
            </InputContainer>
          )}

          {city && (
            <InputContainer>
              <StyledUserDataLabel>City:</StyledUserDataLabel>
              <StyledUserDataInput>{city}</StyledUserDataInput>
            </InputContainer>
          )}
        </UserInfoContainer>

        <ButtonEditUserInfo type="button" onClick={handleFormDisabled}>
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <use href={spriteImage + '#icon-edit-2'} />
          </svg>
        </ButtonEditUserInfo>
      </StyledUserDataForm>
    </>
  );
}
