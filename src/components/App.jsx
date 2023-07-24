import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy, useEffect } from 'react';
// import PetModal from './petModal/PetModal';

// import AddPetPage from 'pages/AddPetPage';
import LoginPage from 'pages/LoginPage';
// import ModalApproveAction from 'pages/ModalApproveAction';
// import NewsPage from 'pages/NewsPage';
// import NoticesPage from 'pages/NoticesPage';
// import OurFriendsPage from 'pages/OurFriendsPage';
import RegisterPage from 'pages/RegisterPage';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
// import UserPage from 'pages/UserPage';

const MainPage = lazy(() => import('../pages/MainPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    // <PetModal/>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
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
