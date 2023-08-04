import {
  PetsCard,
  PetsImg,
  PetsInfoContainer,
  PetsInfoTitle,
  PetsInfoText,
} from '../petsItem/PetsItem.styled';

export default function PetsItemDefault({
  name,
  birthday,
  photoUrl,
  type,
  comments,
  id,
}) {
  return (
    <>
      <PetsCard style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '100%',
            width: '100%',
            borderRadius: '40px',
            backgroundColor: 'rgba(186, 186, 204, 0.3)',
            zIndex: '10',
          }}
        ></div>
        <PetsImg src={photoUrl} alt={`Pets avatar ${name}`} loading="lazy" />

        <PetsInfoContainer>
          <PetsInfoText>Please add you own pet</PetsInfoText>

          <PetsInfoText>
            <PetsInfoTitle> Name: </PetsInfoTitle>
            {name}
          </PetsInfoText>
          <PetsInfoText>
            <PetsInfoTitle>Date of birth: </PetsInfoTitle>
            {birthday}
          </PetsInfoText>
          <PetsInfoText>
            <PetsInfoTitle>Type: </PetsInfoTitle>
            {type}
          </PetsInfoText>
          {comments && (
            <PetsInfoText>
              <PetsInfoTitle>Comments: </PetsInfoTitle>
              {comments}
            </PetsInfoText>
          )}
        </PetsInfoContainer>
      </PetsCard>
    </>
  );
}
