import React from 'react';

import {
  Icon,
  LinkLogin,
  LinkReg,
  List,
  ListItem,
  Text,
} from './AuthNav.styled';

const AuthNav = () => {
  return (
    <List>
      <ListItem>
        <LinkLogin>
          <Text>Log IN</Text>
          <Icon />
        </LinkLogin>
      </ListItem>
      <ListItem>
        <LinkReg>Registration</LinkReg>
      </ListItem>
    </List>
  );
};

export default AuthNav;
