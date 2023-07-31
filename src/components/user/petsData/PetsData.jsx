import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../Button/Button';
import {
  PetsContainer,
  PetsHeaderContainer,
  PetsTitle,
} from './PetsData.styled';
import PetsList from './petsList/PetsList';
import { fetchUserPets } from 'redux/user/operations';

export default function PetsData() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate('/add-pet');
  };

  useEffect(() => {
    dispatch(fetchUserPets());
  }, [dispatch]);

  return (
    <PetsContainer>
      <PetsHeaderContainer>
        <PetsTitle>My pets:</PetsTitle>

        <Button
          type="button"
          $content="Add Pet"
          $darkType
          onClick={handleNavigate}
        />
      </PetsHeaderContainer>

      <PetsList />
    </PetsContainer>
  );
}
