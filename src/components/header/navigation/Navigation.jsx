import Nav from './nav/Nav';
import AuthNav from './authNav/AuthNav';
import UserNav from './userNav/UserNav';
import { Div } from './Navigation.styled';
import LogoComponent from '../logo/Logo';
import { useEffect, useState } from 'react';
import MobMenu from '../mobMenu/MobMenu';

const isLogin = false;
const userName = 'Santa';
const Navigation = () => {
  const [sizeDesk, setsizeDesk] = useState(false);
  const [sizeTab, setsizeTab] = useState(true);
  const [itsMobile, setitsMobile] = useState(false);

  const resizeHandler = () => {
    const clientWidth = window.innerWidth;
    if (clientWidth <= 766) {
      setitsMobile(true);
    } else if (clientWidth < 1279) {
      setsizeTab(true);
      setitsMobile(false);
      setsizeDesk(false);
    } else if (clientWidth >= 1280) {
      setsizeDesk(true);
      setsizeTab(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [itsMobile]);
  return (
    <Div>
      <LogoComponent itsMobile={itsMobile} />
      {sizeDesk ? <Nav /> : null}
      {isLogin ? (
        <AuthNav size={itsMobile} />
      ) : (
        <UserNav userName={userName} size={itsMobile} />
      )}
      {!sizeTab ? null : (
        <MobMenu userName={userName} size={itsMobile} isLogin={isLogin} />
      )}
    </Div>
  );
};

export default Navigation;
