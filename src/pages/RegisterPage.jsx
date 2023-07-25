import AuthForm from 'components/authForm/AuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { selectError } from 'redux/auth/authSelectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleRegistration = userData => {
    dispatch(register(userData));
  };

  useEffect(() => {
    if (error) {
      toast.error('User with the same email already exists', {
        duration: 2000,
        position: 'top-center',
        style: {
          backgroundColor: '#54ADFF',
          borderRadius: '20px',
          color: '#fef9f9',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: '700',
        },
      });
    }
  }, [error]);

  return (
    <>
      <AuthForm
        onSubmit={handleRegistration}
        formType="register"
        showNameField={true}
        showConfirmPassword={true}
      />
    </>
  );
};

export default RegisterPage;
