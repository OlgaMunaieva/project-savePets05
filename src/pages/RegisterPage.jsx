import AuthForm from 'components/authForm/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { selectError } from 'redux/auth/authSelectors';
import { clearError } from '../redux/auth/authSlice';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleRegistration = userData => {
    dispatch(register(userData));
    const redirectToPath = '/register';
    localStorage.setItem('redirectPath', redirectToPath);
  };

  useEffect(() => {
    if (error) {
      toast.error(`${error}`, {
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
  }, [error, dispatch]);

  return (
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
  );
};

export default RegisterPage;
