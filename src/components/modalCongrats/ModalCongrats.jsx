import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from 'react';
import Modal from '../../components/modal/Modal';
import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledButton,
} from './RegisterPage.styled';

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const location = useLocation();
  const pathname = location.state?.pathname || null;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {isLoggedIn && isModalOpen && pathname === 'register' && (
        <Modal closeModal={closeModal} isOpenedModal={openModal} width="610px">
          <StyledContainer>
            <StyledTitle>Congrats</StyledTitle>
            <StyledText>You're registration is success</StyledText>
            <StyledButton onClick={() => navigate('/userpage')}>
              Go to profile
            </StyledButton>
          </StyledContainer>
        </Modal>
      )}
    </>
  );
};

export default UserPage;
