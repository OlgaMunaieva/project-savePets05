import Logout from 'components/user/Logout/Logout';
import PetsData from 'components/user/petsData/PetsData';
import UserData from 'components/user/userData/UserData';
import variables from '../settings/variables';
import { toast } from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { fetchUserInformation } from 'redux/user/operations';
import { selectIsLoading, selectError } from 'redux/user/selectors';
import { CircleLoader } from 'react-spinners';

import { useSelector } from 'react-redux/es/hooks/useSelector';

import { useState, useEffect } from 'react';

import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import ModalCongrats from 'components/modalCongrats/ModalCongrats';
import {
  UserPageContainer,
  UserTitle,
  UserContainer,
} from 'components/user/userForm/utils/UserStyles.styled';

export default function UserPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const redirectPath = localStorage.getItem('redirectPath');

  useEffect(() => {
    const modalShow = localStorage.getItem('modalShow') === 'true';
    if (redirectPath === '/register' && !modalShow) {
      setIsModalOpen(true);
      localStorage.setItem('modalShow', 'true');
    }
  }, [redirectPath]);

  const closeModal = () => {
    setIsModalOpen(false);
    localStorage.removeItem('redirectPath');
    localStorage.removeItem('modalShow');
  };

  const isUserInfoLoading = useSelector(selectIsLoading);
  const userInfoRejectedWithError = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInformation());
  }, [dispatch]);

  return (
    <main>
      <h1 style={variables.visualHidden}>User Page</h1>

      <UserPageContainer>
        <div>
          <UserTitle>My information:</UserTitle>
          <UserContainer>
            <UserData />
            <Logout />
          </UserContainer>
        </div>
        <PetsData />
        <CircleLoader
          loading={isUserInfoLoading}
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
        {userInfoRejectedWithError &&
          toast.error(`${userInfoRejectedWithError}`)}
        ;
        {/* //   <h2>An error occured: {userInfoRejectedWithError}</h2>
        // )} */}
      </UserPageContainer>

      {isLoggedIn && isModalOpen && (
        <ModalCongrats closeModal={closeModal} isOpenedModal={isModalOpen} />
      )}
    </main>
  );
}
