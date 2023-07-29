import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/user/selectors';
// import { selectIsLoading } from 'redux/user/selectors';
import { fetchUserInformation } from 'redux/user/operations';

import UserForm from '../userForm/UserForm';
import Modal from 'components/modal/Modal';
import spriteImage from '../../../images/sprite.svg';

import { StyledFormContainer, ButtonEditUserInfo } from './UserData.styled';

export default function UserData() {
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isFormDisabled, setIsFormDisabled] = useState(false);
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUserInformation());
  }, [dispatch]);

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
          width={'395px'}
          padding={'20px 24px 20px 16px'}
        >
          <UserForm userInfo={user} isFormDisabled={isFormDisabled} />
        </Modal>
      )}

      {Object.keys(user).length > 0 && (
        <StyledFormContainer>
          <UserForm userInfo={user} isFormDisabled={isFormDisabled} />

          <ButtonEditUserInfo type="button" onClick={handleFormDisabled}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <use href={spriteImage + '#icon-edit-2'} />
            </svg>
          </ButtonEditUserInfo>
        </StyledFormContainer>
      )}
    </>
  );
}
