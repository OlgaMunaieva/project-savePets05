import React, { useEffect, useState } from 'react';
import { List, ListItem } from './UserNav.styled';
import { useLocation } from 'react-router-dom';
import UserLink from 'components/header/buttons/UserLink';
import LogoutBtn from 'components/header/buttons/LogoutBtn';

const UserNav = ({ size, userName, modalOpen }) => {
  const [isHome, setHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const locationScaner = () => {
      if (location.pathname === '/main') {
        setHome(false);
        return;
      }
      setHome(true);
    };
    locationScaner();
  }, [location.pathname]);

  return (
    <List>
      <ListItem>{isHome ? <LogoutBtn modalOpen={modalOpen} /> : null}</ListItem>
      <ListItem>
        <UserLink size={size} userName={userName} />
      </ListItem>
    </List>
  );
};

export default UserNav;
