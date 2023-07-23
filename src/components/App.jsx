import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy } from 'react';
// import AddPetPage from 'pages/AddPetPage';
import LoginPage from 'pages/LoginPage';
// import ModalApproveAction from 'pages/ModalApproveAction';
// import NewsPage from 'pages/NewsPage';
// import NoticesPage from 'pages/NoticesPage';
// import OurFriendsPage from 'pages/OurFriendsPage';
import RegisterPage from 'pages/RegisterPage';
// import UserPage from 'pages/UserPage';

const MainPage = lazy(() => import('../pages/MainPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path ="/register" element = {<RegisterPage />} />
        <Route path = "/login" element = {<LoginPage />} />
      </Route>
    </Routes>
    // <div>
    //   <MainPage />
    //   {/* <AddPetPage /> */}
    //   {/* <LoginPage /> */}
    //   {/* <ModalApproveAction /> */}
    //   {/* <NewsPage /> */}
    //   {/* <NoticesPage /> */}
    //   {/* <OurFriendsPage /> */}
    //   {/* <RegisterPage /> */}
    //   {/* <UserPage /> */}
    // </div>
  );
};
export default App;
