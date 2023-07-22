import React from 'react';

import {
  Links,
  List,
  ListItem,
  LogOutIcon,
  Text,
  UserIcon,
  UserLinK,
} from './UserNav.styled';

const userName = 'Sergio';
const UserNav = () => {
  return (
    <List>
      <ListItem>
        <Links>
          Log out
          <LogOutIcon />
        </Links>
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
