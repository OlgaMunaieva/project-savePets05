import React from 'react';
// import { useLocation } from 'react-router-dom';
import { ButtonCircle, Icon } from './addPetBtn.styled';
import spriteImage from '../../../images/sprite.svg';
// import variables from 'settings/variables';

const AddPetBtnCircle = ({ onClick }) => {
  // const location = useLocation();
  // console.log(location.pathname);

  // const user = location.pathname === '/user' ? null : 'user';

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
