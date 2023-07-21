import React from 'react';
import Header from './header/Header';

const SharedLayout = ({ children }) => {
  return (
    <div>
      test text
      <Header />
      {children}
    </div>
  );
};

export default SharedLayout;
