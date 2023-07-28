import { useNavigate } from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import {
  StyledContainer,
  StyledTitle,
  StyledText,
  StyledButton,
} from './ModalCongrats.styled';

// const UserPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(true);
//   const location = useLocation();
//   const pathname = location.state?.pathname || null;

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

const ModalCongrats = ({ closeModal, openModal }) => {
  const navigate = useNavigate();
  return (
    <Modal closeModal={closeModal} isOpenedModal={openModal} width="610px">
      <StyledContainer>
        <StyledTitle>Congrats</StyledTitle>
        <StyledText>You're registration is success</StyledText>
        <StyledButton onClick={() => navigate('/user')}>
          Go to profile
        </StyledButton>
      </StyledContainer>
    </Modal>
  );
};

export default ModalCongrats;
