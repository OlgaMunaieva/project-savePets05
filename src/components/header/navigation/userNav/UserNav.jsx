import React, { useEffect, useState } from 'react';

import {
  LinksLogout,
  List,
  ListItem,
  LogOutIcon,
  Text,
  UserIcon,
  UserLinK,
} from './UserNav.styled';
import { useLocation } from 'react-router-dom';

const userName = 'Sergio';
const UserNav = () => {
  const [isHome, setHome] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const locationScaner = () => {
      if (location.pathname === '/') {
        setHome(false);
        return;
      }
      setHome(true);
    };
    locationScaner();
  }, [location.pathname]);

  return (
    <List>
      <ListItem>
        {isHome ? (
          <LinksLogout>
            Log out
            <LogOutIcon />
          </LinksLogout>
        ) : null}
      </ListItem>
      <ListItem>
        <UserLinK>
          <UserIcon />
          <Text>{userName}</Text>
        </UserLinK>
      </ListItem>
    </List>
  );
};

export default UserNav;
