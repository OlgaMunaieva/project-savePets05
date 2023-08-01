import React from 'react';
import { ButtonCircle, Icon } from './addPetBtn.styled';
import spriteImage from '../../../images/sprite.svg';

const AddPetBtnCircle = ({ onClick }) => {

  return (
    <ButtonCircle onClick={onClick}>
      <span>Add Pet</span>
      <Icon width={24} height={24}>
        <use href={spriteImage + '#icon-plus'} />
      </Icon>
    </ButtonCircle>
  );
};

export default AddPetBtnCircle;
