import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';

const MainPage = lazy(() => import('../pages/MainPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));
const UserPage = lazy(() => import('../pages/UserPage'));

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<SharedLayout />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/add-pet" element={<AddPetPage />} />
      </Route>
    </Routes>
  );
};

export default App;
