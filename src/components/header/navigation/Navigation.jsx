import Nav from './nav/Nav';
import AuthNav from './authNav/AuthNav';
import UserNav from './userNav/UserNav';
import { Div } from './Navigation.styled';
import LogoComponent from '../logo/Logo';

const isLogin = false;

const Navigation = () => {
  return (
    <Div>
      <LogoComponent />
      <Nav />
      {isLogin ? <AuthNav /> : <UserNav />}
    </Div>
  );
};

export default Navigation;
