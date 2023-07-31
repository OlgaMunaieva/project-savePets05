import React from 'react';
import { LinksLogout, LogOutIcon } from './LogoutBtn.styled';

const LogoutBtn = ({ modalOpen }) => {
  return (
    <LinksLogout onClick={() => modalOpen()}>
      Log out
      <LogOutIcon />
    </LinksLogout>
  );
};

export default LogoutBtn;
