import React from 'react';
import { LinksLogout, LogOutIcon } from './LogoutBtn.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  return (
    <LinksLogout onClick={() => dispatch(logOut())}>
      Log out
      <LogOutIcon />
    </LinksLogout>
  );
};

export default LogoutBtn;
