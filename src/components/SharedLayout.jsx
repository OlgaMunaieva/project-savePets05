import React, { Suspense } from 'react';
import MainContainer from './mainContainer/MainContainer.styled';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  return (
    <MainContainer>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </MainContainer>
  );
};

export default SharedLayout;
