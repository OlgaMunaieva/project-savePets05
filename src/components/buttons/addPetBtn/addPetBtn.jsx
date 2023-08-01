import React from 'react';
import { Button, Icon } from './addPetBtn.styled';
import spriteImage from '../../../images/sprite.svg';

const AddPetBtn = ({ onClick }) => {

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
