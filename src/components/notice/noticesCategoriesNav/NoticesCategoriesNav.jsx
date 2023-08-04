import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { List, Button, Item, Wrapper } from './NoticesCategoriesNav.styled';

// import { useNavigate } from 'react-router-dom';
// import { useResize } from 'hooks/useResize';
// import { useState } from 'react';
// import { ModalUserLogin } from 'components/allModals/UserLoginModal/UserLoginModal';

export const filters = [
  { filter: 'sell', path: 'sell' },
  { filter: 'lost/found', path: 'lost-found' },
  { filter: 'in good hands', path: 'for-free' },
  { filter: 'favorite ads', path: 'favorite' },
  { filter: 'my ads', path: 'own' },
];

export const NoticesCategoriesNav = ({ onClick }) => {
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
      <List>{items}</List>
    </Wrapper>
  );
};
