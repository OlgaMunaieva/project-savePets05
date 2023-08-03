import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import { toast } from 'react-hot-toast';
import { useResize } from '../../../hooks/useResize';

import {
  selectUser,
  selectIsLoading,
  selectError,
  // getUserError,
} from 'redux/user/selectors';
import { fetchUserInformation } from 'redux/user/operations';

import UserForm from '../userForm/UserForm';
import Modal from 'components/modal/Modal';
import spriteImage from '../../../images/sprite.svg';

import { StyledFormContainer, ButtonEditUserInfo } from './UserData.styled';

export default function UserData() {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const rejectedWithError = useSelector(selectError);
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const { width } = useResize();

  const handleScreenSize = width => {
    if (width > 1280) {
      return { width: '395px', padding: '20px 24px 20px 16px' };
    } else if (width >= 767 && width < 1280) {
      return { width: '704px', padding: '20px 76px 16px 20px' };
    }
    return { width: '280px', padding: '20px 8px 20px 8px' };
  };

  console.log(handleScreenSize(width).width);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log('fetchuseefffect');
    dispatch(fetchUserInformation());
  }, [dispatch]);

  // const updateProps = () => {
  //   if (!userSelector) {
  //     setUser({ userSelector });
  //   }
  // };

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
          width={handleScreenSize(width).width}
          padding={handleScreenSize(width).padding}
        >
          <UserForm
            user={user}
            isFormDisabled={isFormDisabled}
            closeModal={closeUserProfileModal}
          />
        </Modal>
      )}

      {/* !showUserProfileModal &&  */}

      {Object.keys(user.userInfo).length > 0 && (
        <StyledFormContainer>
          <UserForm user={user} isFormDisabled={isFormDisabled} />

          <ButtonEditUserInfo type="button" onClick={handleFormDisabled}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <use href={spriteImage + '#icon-edit-2'} />
            </svg>
          </ButtonEditUserInfo>
        </StyledFormContainer>
      )}

      <CircleLoader
        loading={isLoading}
        color="#CCE4FB"
        cssOverride={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: ' translate(-50%, -50%)',
        }}
        size={100}
        aria-label="Loading Spinner"
      />
      {rejectedWithError &&
        toast.error('User not found', {
          duration: 2000,
          position: 'top-center',
          style: {
            textAlign: 'center',
            backgroundColor: '#54ADFF',
            borderRadius: '20px',
            color: '#fef9f9',
            fontFamily: 'Manrope, sans-serif',
            fontWeight: '700',
          },
        })}
    </>
  );
}
