import { urlModify } from 'components/user/userForm/utils/UrlModify';
import {
  PetsCard,
  PetsImg,
  PetsInfoContainer,
  PetsInfoTitle,
  PetsInfoText,
} from './PetsItem.styled';
const AVATAR_CLOUDINARY_URL =
  'https://res.cloudinary.com/dfvviqdic/image/upload/';

export default function PetsItem({ name, birthday, photoUrl }) {
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
          <PetsInfoTitle>Type:</PetsInfoTitle>{' '}
        </PetsInfoText>
        <PetsInfoText>
          <PetsInfoTitle>Comments: </PetsInfoTitle>
        </PetsInfoText>
      </PetsInfoContainer>
    </PetsCard>
  );
}
