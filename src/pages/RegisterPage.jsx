import AuthForm from 'components/authForm/AuthForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegistration = userData => {
    dispatch(register(userData));
  };

  return (
    <AuthForm
      onSubmit={handleRegistration}
      formType="register"
      showNameField={true}
      showConfirmPassword={true}
    />
  );
};

export default RegisterPage;
