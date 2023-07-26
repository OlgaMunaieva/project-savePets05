import AuthForm from 'components/authForm/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { selectError } from 'redux/auth/authSelectors';
import PictureContainer from 'components/pictureContainer/PictureContainer.styled';
import { clearError } from '../redux/auth/authSlice';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleRegistration = userData => {
    dispatch(register(userData));
  };

  console.log(clearError);

  useEffect(() => {
    if (error) {
      toast.error('User with the same email already exists', {
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
      });
    }
    return () => dispatch(clearError());
  }, [error]);

  return (
    <PictureContainer.PawContainer>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <AuthForm
          onSubmit={handleRegistration}
          formType="register"
          showNameField={true}
          showConfirmPassword={true}
        />
      </motion.div>
    </PictureContainer.PawContainer>
  );
};

export default RegisterPage;
