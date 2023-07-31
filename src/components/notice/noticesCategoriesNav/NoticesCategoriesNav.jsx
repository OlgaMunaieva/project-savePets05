import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { List, Button, Item } from './NoticesCategoriesNav.styled';

export const filters = [
  { filter: 'sell', path: 'sell' },
  { filter: 'lost/found', path: 'lost-found' },
  { filter: 'in good hands', path: 'for-free' },
  { filter: 'favorite ads', path: 'favorite' },
  { filter: 'my ads', path: 'own' },
];

export const NoticesCategoriesNav = () => {
  const isUser = useSelector(selectIsLoggedIn);
  const items = filters.map(({ filter, path }, item) => {
    const isAuthPage = path === 'favorite' || path === 'own';

    if (!isUser && isAuthPage) {
      return null;
    }

    return (
      <Item key={item}>
        <Button to={`/notices/${path}`}>{filter}</Button>
      </Item>
    );
  });

  return <List>{items}</List>;
};
