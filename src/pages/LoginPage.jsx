import AuthForm from 'components/authForm/AuthForm';
import PictureContainer from 'components/pictureContainer/PictureContainer.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    dispatch(logIn({ email, password }));
  };

  return (
    <PictureContainer.PawContainer>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <AuthForm
          onSubmit={handleLogin}
          formType="login"
          showNameField={false}
          showConfirmPassword={false}
        />
      </motion.div>
    </PictureContainer.PawContainer>
  );
};

export default LoginPage;
