import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { lazy, useEffect } from 'react';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { refreshUser } from 'redux/auth/authOperations';

const MainPage = lazy(() => import('../pages/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const NewsPage = lazy(()=>import('../pages/NewsPage'));

const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/user"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route
            path="favorite"
            element={
              <PrivateRoute redirectTo="/login" component={<NoticesPage />} />
            }
          />
          <Route
            path="own"
            element={
              <PrivateRoute redirectTo="/login" component={<NoticesPage />} />
            }
          />
          <Route
            path="/add-pet"
            element={
              <PrivateRoute redirectTo="/login" component={<AddPetPage />} />
            }
          />
          <Route path="/main" element={<MainPage />} />
          <Route path="/notices">
            <Route index element={<Navigate to="/notices/sell" />} />
            <Route path=":categoryName" element={<NoticesPage />} />
          </Route>
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    )
  );
};
export default App;
