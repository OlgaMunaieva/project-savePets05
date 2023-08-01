import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import Button from '../Button/Button';
import {
  PetsContainer,
  PetsHeaderContainer,
  PetsTitle,
} from './PetsData.styled';
import PetsList from './petsList/PetsList';
import { fetchUserPets } from 'redux/user/operations';
import AddPetBtn from 'components/buttons/addPetBtn/addPetBtn';

export default function PetsData() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = source => {
    navigate(`/add-pet?source=${source}`);
  };

  useEffect(() => {
    dispatch(fetchUserPets());
  }, [dispatch]);

  return (
    <PetsContainer>
      <PetsHeaderContainer>
        <PetsTitle>My pets:</PetsTitle>

        <AddPetBtn
          // to={`/add-pet`}
          // $content="Add Pet"
          // $darkType
          onClick={() => handleNavigate('user')}
        />
      </PetsHeaderContainer>

      <PetsList />
    </PetsContainer>
  );
}
