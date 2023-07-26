import React, { Suspense } from 'react';
import MainContainer from './mainContainer/MainContainer.styled';
import Header from './header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import PictureContainer from './pictureContainer/PictureContainer.styled';

const SharedLayout = () => {
  const location = useLocation();
  const ContainerToRender =
    location.pathname === '/' ||
    location.pathname === '/main' ||
    location.pathname === '/register' ||
    location.pathname === '/login' ||
    location.pathname === '/add-pet'
      ? PictureContainer.PawContainer
      : MainContainer;

  return (
    <ContainerToRender>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </ContainerToRender>
  );
};

export default SharedLayout;
