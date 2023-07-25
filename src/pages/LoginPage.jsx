import AuthForm from 'components/authForm/AuthForm';
import PictureContainer from 'components/pictureContainer/PictureContainer.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = ({ email, password }) => {
    dispatch(logIn({ email, password }));
  };

  return (
    <PictureContainer.PawContainer>
      <AuthForm
        onSubmit={handleLogin}
        formType="login"
        showNameField={false}
        showConfirmPassword={false}
      />
    </PictureContainer.PawContainer>
  );
};

export default LoginPage;
