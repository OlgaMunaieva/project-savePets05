import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import {
  List,
  Button,
  Item,
  Wrapper,
  WrapperLinks,
} from './NoticesCategoriesNav.styled';
import AddPetBtn from 'components/buttons/addPetBtn/addPetBtn';
import { useNavigate } from 'react-router-dom';
import { useResize } from 'hooks/useResize';
import { useState } from 'react';
import { ModalUserLogin } from 'components/allModals/UserLoginModal/UserLoginModal';

export const filters = [
  { filter: 'sell', path: 'sell' },
  { filter: 'lost/found', path: 'lost-found' },
  { filter: 'in good hands', path: 'for-free' },
  { filter: 'favorite ads', path: 'favorite' },
  { filter: 'my ads', path: 'own' },
];

export const NoticesCategoriesNav = ({ onClick }) => {
  const { width } = useResize();
  const navigate = useNavigate(); // для кнопки AddPet
  const [isModalOpenUserLogin, setIsModalOpenUserLogin] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  // для кнопки AddPet
  const handleNavigate = source => {
    if (!isLoggedIn) {
      setIsModalOpenUserLogin(true);
    } else {
      navigate(`/add-pet?source=${source}`);
    }
  };

  const isUser = useSelector(selectIsLoggedIn);
  const items = filters.map(({ filter, path }) => {
    const isAuthPage = path === 'favorite' || path === 'own';

    if (!isUser && isAuthPage) {
      return null;
    }

    return (
      <Item key={path}>
        <Button to={`/notices/${path}`} onClick={() => onClick(path)}>
          {filter}
        </Button>
      </Item>
    );
  });

  return (
    <Wrapper>
      {isModalOpenUserLogin && (
        <ModalUserLogin closeModal={() => setIsModalOpenUserLogin(false)} />
      )}
      <List>{items}</List>
      <WrapperLinks>
        {width >= 768 && (
          <AddPetBtn onClick={() => handleNavigate('notices')} />
        )}
      </WrapperLinks>
    </Wrapper>
  );
};
