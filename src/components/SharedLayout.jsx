import React, { Suspense } from 'react';
import MainContainer from './mainContainer/MainContainer.styled';
import Header from './header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  const location = useLocation();
  return (
    <MainContainer pathname={location.pathname}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </MainContainer>
  );
};

export default SharedLayout;
