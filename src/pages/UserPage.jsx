import Logout from 'components/user/Logout/Logout';
import PetsData from 'components/user/petsData/PetsData';
import UserData from 'components/user/userData/UserData';
import variables from '../settings/variables';

import { selectIsLoggedIn } from '../redux/auth/authSelectors';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState, useEffect } from 'react';
// import ModalCongrats from 'components/modalCongrats/ModalCongrats';

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

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <UserData />
          <Logout />
        </div>
        <PetsData />
      </div>
      {/* {isLoggedIn && isModalOpen && (
        <ModalCongrats closeModal={closeModal} isOpenedModal={isModalOpen} />
      )} */}
    </main>
  );
}
