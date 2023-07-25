import React from 'react';
import {
  List,
  ListItem,
  LinkLogin,
  Text,
  Icon,
  LinkReg,
} from './AuthBtn.styled';

const AuthBtn = () => {
  return (
    <List>
      <ListItem>
        <LinkLogin to="/login">
          <Text>Log IN</Text>
          <Icon />
        </LinkLogin>
      </ListItem>
      <ListItem>
        <LinkReg to="/register">Registration</LinkReg>
      </ListItem>
    </List>
  );
};

export default AuthBtn;
