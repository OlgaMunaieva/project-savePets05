import AuthForm from 'components/authForm/AuthForm';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = userData => {
    console.log('Handle login is called:', userData);
    dispatch(logIn(userData));
  };

  return (
    <AuthForm
      onSubmit={handleLogin}
      formType="login"
      showNameField={false}
      showConfirmPassword={false}
    />
  );
};

export default LoginPage;
