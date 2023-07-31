import Logout from 'components/user/Logout/Logout';
import PetsData from 'components/user/petsData/PetsData';
import UserData from 'components/user/userData/UserData';
import variables from '../settings/variables';

import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState, useEffect } from 'react';
import ModalCongrats from 'components/modalCongrats/ModalCongrats';
import {
  UserPageContainer,
  UserTitle,
} from 'components/user/userForm/utils/UserStyles.styled';

export default function UserPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // congrat Modal
  useEffect(() => {
    const redirectPath = localStorage.getItem('redirectPath');
    if (redirectPath === '/register') {
      setIsModalOpen(true);
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //
  return (
    <main>
      <h1 style={variables.visualHidden}>User Page</h1>

      <UserPageContainer>
        <div>
          <></>
          <UserTitle>My information:</UserTitle>
          <UserData />

          <Logout />
        </div>

        <PetsData />
      </UserPageContainer>

      {isLoggedIn && isModalOpen && (
        <ModalCongrats closeModal={closeModal} isOpenedModal={isModalOpen} />
      )}
    </main>
  );
}
