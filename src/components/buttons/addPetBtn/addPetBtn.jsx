import React from 'react';
// import { useLocation } from 'react-router-dom';
import { Button, Icon } from './addPetBtn.styled';
import spriteImage from '../../../images/sprite.svg';
// import variables from 'settings/variables';

const AddPetBtn = ({ onClick }) => {
  // const location = useLocation();
  // console.log(location.pathname);

  // const user = location.pathname === '/user' ? null : 'user';

  return (
    <Button onClick={onClick}>
      <span>Add Pet</span>
      <Icon width={24} height={24}>
        <use href={spriteImage + '#icon-plus-small'} />
      </Icon>
    </Button>
  );
};

export default AddPetBtn;
