import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy } from 'react';

// import PetModal from './petModal/PetModal';
// import AddPetPage from 'pages/AddPetPage';
// import ModalApproveAction from 'pages/ModalApproveAction';
// import NewsPage from 'pages/NewsPage';

const MainPage = lazy(() => import('../pages/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
        <Route path="/notices/sell" element={<NoticesPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
      </Route>
    </Routes>
    // <div>
    //   {/* <AddPetPage /> */}
    //   {/* <ModalApproveAction /> */}
    //   {/* <NewsPage /> */}
    // </div>
  );
};
export default App;
