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

export const filters = [
  { filter: 'sell', path: 'sell' },
  { filter: 'lost/found', path: 'lost-found' },
  { filter: 'in good hands', path: 'for-free' },
  { filter: 'favorite ads', path: 'favorite' },
  { filter: 'my ads', path: 'own' },
];

export const NoticesCategoriesNav = () => {
  const navigate = useNavigate(); // для кнопки AddPet

  // для кнопки AddPet
  const handleNavigate = () => {
    navigate('/add-pet');
  };

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

  return (
    <Wrapper>
      <List>{items}</List>
      <WrapperLinks>
        <AddPetBtn onClick={handleNavigate} />
      </WrapperLinks>
    </Wrapper>
  );
};
