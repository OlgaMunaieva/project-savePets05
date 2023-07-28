import UserForm from '../userForm/UserForm';

// redux
// import { useState, useEffect } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/user/selectors';
// import { selectIsLoading } from 'redux/user/selectors';
import { fetchUserInformation } from 'redux/user/operations';

export default function UserData() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isFormDisabled, setIsFormDisabled] = useState(false);
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUserInformation());
  }, [dispatch]);

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  return <>{Object.keys(user).length > 0 && <UserForm userInfo={user} />}</>;
}
