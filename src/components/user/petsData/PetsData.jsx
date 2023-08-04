import { useNavigate } from 'react-router-dom';

import {
  PetsContainer,
  PetsHeaderContainer,
  PetsTitle,
} from './PetsData.styled';
import PetsList from './petsList/PetsList';

import AddPetBtn from 'components/buttons/addPetBtn/addPetBtn';

export default function PetsData() {
  const navigate = useNavigate();

  const handleNavigate = source => {
    navigate(`/add-pet?source=${source}`);
  };

  return (
    <PetsContainer>
      <PetsHeaderContainer>
        <PetsTitle>My pets:</PetsTitle>

        <AddPetBtn onClick={() => handleNavigate('user')} />
      </PetsHeaderContainer>

      <PetsList />
    </PetsContainer>
  );
}
