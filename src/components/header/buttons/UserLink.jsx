import React from 'react';
import { UserLinK, UserIcon, Text } from './UserLink.styled';

const UserLink = ({ userName, size }) => {
  return (
    <UserLinK>
      <UserIcon />
      {size ? null : <Text> {userName} </Text>}
    </UserLinK>
  );
};

export default UserLink;
