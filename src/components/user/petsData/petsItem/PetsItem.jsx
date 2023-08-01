import { urlModify } from 'components/user/userForm/utils/UrlModify';
import spriteImage from '../../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { deleteUserPet } from 'redux/user/operations';

import {
  PetsCard,
  PetsImg,
  PetsInfoContainer,
  PetsInfoTitle,
  PetsInfoText,
  ButtonDeletePet,
} from './PetsItem.styled';
const AVATAR_CLOUDINARY_URL =
  'https://res.cloudinary.com/dfvviqdic/image/upload/';

export default function PetsItem({
  name,
  birthday,
  photoUrl,
  type,
  comments,
  id,
}) {
  const dispatch = useDispatch();
  const deletePet = () => {
    console.log('deletPet');
    console.log('key', id);
    dispatch(deleteUserPet(id));
  };

  return (
    <PetsCard>
      <PetsImg
        src={urlModify(AVATAR_CLOUDINARY_URL, photoUrl)}
        alt={`Pets avatar ${name}`}
        loading="lazy"
      />
      <PetsInfoContainer>
        <PetsInfoText>
          <PetsInfoTitle> Name: </PetsInfoTitle>
          {name}
        </PetsInfoText>
        <PetsInfoText>
          <PetsInfoTitle>Date of birth: </PetsInfoTitle>
          {birthday}
        </PetsInfoText>
        <PetsInfoText>
          <PetsInfoTitle>Type:</PetsInfoTitle>
          {type}
        </PetsInfoText>
        {comments && (
          <PetsInfoText>
            <PetsInfoTitle>Comments: </PetsInfoTitle>
            {comments}
          </PetsInfoText>
        )}
      </PetsInfoContainer>
      <ButtonDeletePet type="button" onClick={deletePet}>
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <use href={spriteImage + '#icon-trash-2'} />
        </svg>
      </ButtonDeletePet>
    </PetsCard>
  );
}
