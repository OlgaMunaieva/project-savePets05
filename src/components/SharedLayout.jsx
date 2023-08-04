import React, { Suspense } from 'react';
import Container from './mainContainer/MainContainer.styled';
import Header from './header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  const location = useLocation();

  const ContainerToRender =
    location.pathname === '/notices/sell' ||
    location.pathname === '/notices' ||
    location.pathname === '/user' ||
    location.pathname === '/news' ||
    location.pathname === '/friends' ||
    location.pathname === '/notices/lost-found' ||
    location.pathname === '/notices/favorite' ||
    location.pathname === '/notices/own' ||
    location.pathname === '/notices/for-free'
      ? Container.MainContainer
      : Container.PawContainer;

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
