import React from 'react';
import { Header } from './Header.styled';
import Navigation from './navigation/Navigation';

const HeaderComponent = () => {
  return (
    <Header>
      <Navigation />
    </Header>
  );
};

export default HeaderComponent;
