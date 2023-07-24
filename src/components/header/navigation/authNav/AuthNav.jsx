import AuthBtn from 'components/header/buttons/AuthBtn';

const AuthNav = ({ size }) => {
  return <>{size ? null : <AuthBtn />}</>;
};

export default AuthNav;
