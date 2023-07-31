import { useSelector } from 'react-redux';
import PetsItem from '../petsItem/PetsItem';
// import { selectPets, selectIsLoading, selectError } from 'redux/user/selectors';
import { selectPets } from 'redux/user/selectors';
import { PetsCardContainer } from './PetsList.styled';

export default function PetsList() {
  const pets = useSelector(selectPets);
  //   const isLoading = useSelector(selectIsLoading);
  //   const rejectedWithError = useSelector(selectError);

  return (
    <PetsCardContainer>
      {pets.map(({ id, name, birthday, photoUrl }) => (
        <PetsItem
          key={id}
          name={name}
          birthday={birthday}
          photoUrl={photoUrl}
        />
      ))}
    </PetsCardContainer>
  );
}
