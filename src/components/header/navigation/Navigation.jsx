import Nav from './nav/Nav';
import AuthNav from './authNav/AuthNav';
import UserNav from './userNav/UserNav';
import { Div } from './Navigation.styled';
import LogoComponent from '../logo/Logo';
import { useEffect, useState } from 'react';
import MobMenu from '../mobMenu/MobMenu';
const isLogin = true;

const Navigation = () => {
  const [size, setSize] = useState(false);
  const [sizeTab, setSizeTab] = useState(false);

  const resizeHandler = () => {
    const clientWidth = window.innerWidth;
    if (clientWidth <= 1279) {
      setSize(true);
      setSizeTab(true);
    } else if (clientWidth >= 1280) {
      setSize(false);
      setSizeTab(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return (
    <Div>
      <LogoComponent />
      {!size ? <Nav /> : null}
      {isLogin ? <AuthNav /> : <UserNav />}
      {!sizeTab ? null : <MobMenu />}
    </Div>
  );
};

export default Navigation;
