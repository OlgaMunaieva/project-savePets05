import React from 'react';
import {
  List,
  ListItem,
  LinkLogin,
  Text,
  Icon,
  LinkReg,
} from './AuthBtn.styled';

const AuthBtn = ({ toggle }) => {
  return (
    <List>
      <ListItem>
        <LinkLogin to="/login" onClick={() => toggle()}>
          <Text>Log IN</Text>
          <Icon />
        </LinkLogin>
      </ListItem>
      <ListItem>
        <LinkReg onClick={() => toggle()} to="/register">
          Registration
        </LinkReg>
      </ListItem>
    </List>
  );
};

export default AuthBtn;
