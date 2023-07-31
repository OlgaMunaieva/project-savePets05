import AuthBtn from 'components/header/buttons/AuthBtn';

const AuthNav = ({ size, toggle }) => {
  return <>{!size && <AuthBtn toggle={toggle} />}</>;
};

export default AuthNav;
