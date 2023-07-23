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

export default AuthBtn;
