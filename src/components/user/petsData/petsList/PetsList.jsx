import { useSelector } from 'react-redux';
import { selectPets } from 'redux/user/selectors';

import PetsItem from '../petsItem/PetsItem';
import PetsItemDefault from '../petsItemDefault/PetsItemDefault';

import { PetsCardContainer } from './PetsList.styled';
import UserDefaultAvatar from '../../../../images/icons/user-default-avatar.svg';

export default function PetsList() {
  const pets = useSelector(selectPets);

  const defaultPet = [
    {
      id: 1,
      name: 'Your pet name',
      birthday: 'DD-MM-YYYY',
      photoUrl: UserDefaultAvatar,
      type: 'Type of your pet',
      comments: 'We like pets',
    },
  ];

  return (
    <>
      {pets?.length === 0 ? (
        <PetsCardContainer style={{ position: 'relative' }}>
          {defaultPet.map(pet => (
            <PetsItemDefault
              key={pet.id}
              name={pet.name}
              birthday={pet.birthday}
              photoUrl={pet.photoUrl}
              type={pet.type}
              comments={pet.comments}
              id={pet.id}
            />
          ))}
        </PetsCardContainer>
      ) : (
        <PetsCardContainer>
          {pets.map(({ id, name, birthday, photoUrl, type, comments }) => (
            <PetsItem
              key={id}
              name={name}
              birthday={birthday}
              photoUrl={photoUrl}
              type={type}
              comments={comments}
              id={id}
            />
          ))}
        </PetsCardContainer>
      )}
    </>
  );
}
